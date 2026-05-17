import { useEffect, useState } from 'react'
import { Sparkles, Infinity } from 'lucide-react'
import ArrowButton from './ArrowButton'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useCounter } from '../hooks/useCounter'
import { useSectionReveal } from '../hooks/useSectionReveal'

function StatCard({ isVisible }: { isVisible: boolean }) {
  const h    = useCounter(48, 900, isVisible)
  const five = useCounter(5,  900, isVisible)

  return (
    <div
      className="md:col-span-4 rounded-2xl p-10 flex items-center card-lift"
      style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', minHeight: '160px', transition: 'background-color 380ms ease' }}
    >
      <div className="w-full grid grid-cols-3">
        <div className="pr-8 flex flex-col items-center text-center" style={{ borderRight: '1px solid var(--border)' }}>
          <span style={{ fontSize: 'clamp(2.6rem,4.5vw,4rem)', fontWeight: 500, letterSpacing: '-0.04em', color: '#0047FF', lineHeight: 1 }}>
            {h}h
          </span>
          <span style={{ color: 'var(--fg-mid)', fontSize: '0.875rem', marginTop: '0.5rem', fontWeight: 400 }}>Setup completo</span>
        </div>
        <div className="px-8 flex flex-col items-center text-center" style={{ borderRight: '1px solid var(--border)' }}>
          <span style={{ fontSize: 'clamp(2.6rem,4.5vw,4rem)', fontWeight: 500, letterSpacing: '-0.04em', color: '#0047FF', lineHeight: 1 }}>
            24/7
          </span>
          <span style={{ color: 'var(--fg-mid)', fontSize: '0.875rem', marginTop: '0.5rem', fontWeight: 400 }}>Funcionando sin parar</span>
        </div>
        <div className="pl-8 flex flex-col items-center text-center">
          <span style={{ fontSize: 'clamp(2.6rem,4.5vw,4rem)', fontWeight: 500, letterSpacing: '-0.04em', color: '#0047FF', lineHeight: 1 }}>
            +{five}
          </span>
          <span style={{ color: 'var(--fg-mid)', fontSize: '0.875rem', marginTop: '0.5rem', fontWeight: 400 }}>Citas en 7 días garantizadas</span>
        </div>
      </div>
    </div>
  )
}

export default function InfoSection() {
  const { ref, hasEntered, sectionStyle } = useSectionReveal()
  const { ref: statsRef, isVisible: statsVisible } = useIntersectionObserver(0.3)
  const [cardVisible, setCardVisible] = useState([false, false, false, false])

  useEffect(() => {
    if (!hasEntered) return
    ;[0, 1, 2, 3].forEach((i) =>
      setTimeout(() => setCardVisible((p) => { const n=[...p]; n[i]=true; return n }), 300 + i * 110)
    )
  }, [hasEntered])

  const card = (i: number) => ({
    opacity:    cardVisible[i] ? 1 : 0,
    transform:  cardVisible[i] ? 'translateY(0)' : 'translateY(36px)',
    transition: 'opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)',
  })

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="producto"
      className="py-32 px-6"
      style={{ background: 'var(--bg)', ...sectionStyle }}
    >
      <div className="max-w-8xl mx-auto">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 items-end">
          <div>
            <h2 style={{ fontSize: 'clamp(2.6rem,5.5vw,4.5rem)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1.04, color: 'var(--fg)', marginBottom: '2rem' }}>
              Conoce a<br />Nureom.
            </h2>
            <ArrowButton label="Ver demo" variant="dark-on-light" />
          </div>
          <div>
            <p style={{ fontSize: 'clamp(1.2rem,1.9vw,1.65rem)', fontWeight: 400, color: 'var(--fg-hi)', lineHeight: 1.55 }}>
              Un agente de IA que analiza tu base de datos, escribe mensajes personalizados según el historial de cada paciente, y agenda citas reales en tu calendario. Sin que muevas un dedo.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* Card 1 — brand blue */}
          <div
            className="md:col-span-2 rounded-2xl p-10 relative overflow-hidden card-shimmer card-lift"
            style={{ background: '#0047FF', minHeight: '320px', ...card(0) }}
          >
            <div className="flex flex-col justify-between h-full relative z-10" style={{ minHeight: '260px' }}>
              <h3 style={{ fontSize: 'clamp(1.5rem,2.4vw,2.1rem)', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#fff' }}>
                Pacientes que<br />florecen.
              </h3>
              <p className="text-white/70 text-base mt-6" style={{ maxWidth: '22rem' }}>
                Convertimos tu base de datos dormida en citas reales que llenan tu calendario.
              </p>
            </div>
            <svg className="absolute bottom-0 right-0" width="180" height="180" viewBox="0 0 180 180" fill="none" style={{ opacity: 0.13 }}>
              <circle cx="180" cy="180" r="60"  stroke="white" strokeWidth="2"   fill="none" />
              <circle cx="180" cy="180" r="96"  stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="180" cy="180" r="132" stroke="white" strokeWidth="1"   fill="none" />
            </svg>
          </div>

          {/* Card 2 — navy */}
          <div className="rounded-2xl p-10 flex flex-col justify-between card-lift card-lift-dark card-glow-border" style={{ background: '#04102B', minHeight: '320px', ...card(1) }}>
            <Sparkles size={20} className="text-white/35" />
            <div>
              <h3 style={{ fontSize: 'clamp(1.35rem,1.9vw,1.75rem)', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#fff', marginBottom: '0.9rem' }}>
                Personalización<br />real.
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Cada mensaje se redacta según el historial, edad y tratamientos previos de cada paciente.
              </p>
            </div>
          </div>

          {/* Card 3 — navy */}
          <div className="rounded-2xl p-10 flex flex-col justify-between card-lift card-lift-dark card-glow-border" style={{ background: '#04102B', minHeight: '320px', ...card(2) }}>
            <Infinity size={20} className="text-white/35" />
            <div>
              <h3 style={{ fontSize: 'clamp(1.35rem,1.9vw,1.75rem)', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#fff', marginBottom: '0.9rem' }}>
                Funciona<br />24/7.
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Conversa, responde dudas y agenda mientras atiendes pacientes o duermes.
              </p>
            </div>
          </div>

          {/* Card 4 — stats */}
          <div id="resultados" ref={statsRef as React.RefObject<HTMLDivElement>} style={card(3)} className="md:col-span-4">
            <StatCard isVisible={statsVisible} />
          </div>
        </div>
      </div>
    </section>
  )
}
