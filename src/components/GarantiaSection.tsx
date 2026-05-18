import { useRef, useState, useEffect } from 'react'
import { useCounter } from '../hooks/useCounter'
import { useSectionReveal } from '../hooks/useSectionReveal'
import PearlButton from './PearlButton'


function AnimatedPrice({ isActive }: { isActive: boolean }) {
  const val = useCounter(297, 900, isActive)
  return (
    <div className="flex items-baseline gap-2">
      <span style={{ fontSize: 'clamp(3.5rem,7vw,5.5rem)', fontWeight: 500, letterSpacing: '-0.05em', color: '#fff', lineHeight: 1 }}>
        ${val}
      </span>
      <span style={{ fontSize: '1.4rem', fontWeight: 400, color: 'rgba(255,255,255,0.55)', lineHeight: 1 }}>/mes</span>
    </div>
  )
}

function HeadlineNumbers({ isActive }: { isActive: boolean }) {
  const five  = useCounter(5, 900, isActive)
  const seven = useCounter(7, 900, isActive)
  return (
    <h2 style={{ fontSize: 'clamp(2rem,3.8vw,3.2rem)', fontWeight: 500, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.1, marginBottom: '1.4rem' }}>
      <span style={{ color: '#0047FF' }}>{five} citas</span>{' en '}
      <span style={{ color: '#0047FF' }}>{seven} días</span>,<br />o no pagas nada.
    </h2>
  )
}

export default function GarantiaSection() {
  const { ref: sectionRef, sectionStyle } = useSectionReveal(0.12)
  const cardRef   = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const el = cardRef.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsActive(true); obs.unobserve(el) } }, { threshold: 0.3 })
    obs.observe(el); return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="precios"
      className="py-20 px-6"
      style={{ background: 'var(--bg)', ...sectionStyle }}
    >
      <div className="max-w-8xl mx-auto">
        <div
          ref={cardRef}
          className="relative rounded-3xl overflow-hidden"
          style={{ padding: 'clamp(3rem,6vw,5rem)', border: '1px solid rgba(0,71,255,0.18)' }}
        >
          {/* Blobs animados */}
          <div className="card-blob" style={{ top: '50%', left: '50%', width: '480px', height: '480px', backgroundColor: '#0047FF', filter: 'blur(80px)', opacity: 0.85, animationDuration: '5s', zIndex: 0 }} />
          <div className="card-blob" style={{ top: '25%', left: '20%', width: '300px', height: '300px', backgroundColor: '#3A6FFF', filter: 'blur(65px)', opacity: 0.6, animationDuration: '7s', animationDelay: '-3s', zIndex: 0 }} />

          {/* Overlay oscuro glass */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(4,16,43,0.86)', zIndex: 1 }} />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
            {/* Izquierda */}
            <div className="md:col-span-7">
              <div className="w-fit mb-5">
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs" style={{ background: 'rgba(127,163,255,0.12)', border: '1px solid rgba(127,163,255,0.22)', color: '#7FA3FF', fontWeight: 500, letterSpacing: '0.08em' }}>
                  GARANTÍA NUREOM
                </span>
              </div>
              <HeadlineNumbers isActive={isActive} />
              <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: '1.08rem', lineHeight: 1.65, maxWidth: '32rem', fontWeight: 400 }}>
                Tan seguros estamos del sistema que no cobramos hasta ver tu calendario llenándose. Si en la primera semana no generamos al menos 5 citas reales, el mes va por nuestra cuenta.
              </p>
            </div>

            {/* Derecha */}
            <div className="md:col-span-5 flex flex-col gap-6 md:items-start">
              <AnimatedPrice isActive={isActive} />
              <PearlButton label="Activar mi clínica" />
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', fontWeight: 400 }}>
                Setup en 48h · Cancelas cuando quieras
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
