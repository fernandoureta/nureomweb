import { useEffect } from 'react'

export default function SpotlightCursor() {
  useEffect(() => {
    let raf: number

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--cx', `${e.clientX}px`)
        document.documentElement.style.setProperty('--cy', `${e.clientY}px`)
      })
    }

    // Start off-screen so no flash on load
    document.documentElement.style.setProperty('--cx', '-600px')
    document.documentElement.style.setProperty('--cy', '-600px')

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return null
}
