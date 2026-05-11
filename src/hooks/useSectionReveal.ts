import { useEffect, useRef, useState, CSSProperties } from 'react'

type Phase = 'idle' | 'visible' | 'leaving'

export function useSectionReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null)
  const [phase, setPhase] = useState<Phase>('idle')
  const prevIn = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const is = entry.isIntersecting

        if (is && !prevIn.current) {
          // Reset to idle (no transition), then after 2 frames start fade-in
          setPhase('idle')
          requestAnimationFrame(() =>
            requestAnimationFrame(() => setPhase('visible'))
          )
        } else if (!is && prevIn.current) {
          // Only fade out when leaving from the top (user scrolled past)
          if (entry.boundingClientRect.top < 0) {
            setPhase('leaving')
          }
        }

        prevIn.current = is
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const hasEntered = phase === 'visible' || phase === 'leaving'

  const sectionStyle: CSSProperties =
    phase === 'visible'
      ? {
          opacity: 1,
          transform: 'translateY(0)',
          // 280ms delay = the "gap" — background visible before section fades in
          transition:
            'opacity 750ms cubic-bezier(0.16,1,0.3,1) 280ms, transform 750ms cubic-bezier(0.16,1,0.3,1) 280ms',
        }
      : phase === 'leaving'
      ? {
          opacity: 0,
          transform: 'translateY(-14px)',
          transition: 'opacity 360ms ease, transform 360ms ease',
        }
      : {
          opacity: 0,
          transform: 'translateY(28px)',
          transition: 'none',
        }

  return { ref, hasEntered, sectionStyle }
}
