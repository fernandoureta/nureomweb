import { useEffect, useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { useSectionReveal } from '../hooks/useSectionReveal'

const steps = [
  { num: 1, label: '01', title: 'Conectamos\ntu data',     desc: 'Importamos tu base de pacientes inactivos desde Excel, tu CRM, o donde la tengas.' },
  { num: 2, label: '02', title: 'Entrenamos\nel agente',   desc: 'Definimos tu tono, tus tratamientos estrella y tu calendario. En 48h queda listo.' },
  { num: 3, label: '03', title: 'Llenamos\ntu agenda',     desc: 'El agente conversa por WhatsApp y agenda directo en Cal.com. Tú solo recibes citas.' },
]

function StepNumber({ target, label, isActive, delay }: { target: number; label: string; isActive: boolean; delay: number }) {
  const [active, setActive] = useState(false)
  useEffect(() => {
    if (!isActive) return
    const t = setTimeout(() => setActive(true), delay)
    return () => clearTimeout(t)
  }, [isActive, delay])

  const val     = useCounter(target, 900, active)
  const display = String(active ? val : 0).padStart(2, '0')

  return (
    <span style={{ fontSize: 'clamp(5rem,9vw,7.5rem)', fontWeight: 500, letterSpacing: '-0.06em', color: '#0047FF', lineHeight: 1, display: 'block', opacity: active ? 1 : 0.4, transition: 'opacity 400ms ease' }}>
      {active ? display : label}
    </span>
  )
}

export default function ComoFuncionaSection() {
  const { ref, hasEntered, sectionStyle } = useSectionReveal(0.12)
  const [stepVisible, setStepVisible] = useState([false, false, false])

  useEffect(() => {
    if (!hasEntered) return
    ;[0, 1, 2].forEach((i) =>
      setTimeout(() => setStepVisible((p) => { const n=[...p]; n[i]=true; return n }), 320 + i * 150)
    )
  }, [hasEntered])

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="como-funciona"
      className="py-32 px-6"
      style={{ background: 'var(--bg)', ...sectionStyle }}
    >
      <div className="max-w-8xl mx-auto">

        {/* Header */}
        <div style={{ maxWidth: '48rem', marginBottom: '5rem' }}>
          <div className="w-fit mb-5">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
              style={{ background: 'var(--border)', border: '1px solid var(--border-2)', color: 'var(--fg-mid)', fontWeight: 500, letterSpacing: '0.08em' }}
            >
              CÓMO FUNCIONA
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.6rem,5.5vw,4.5rem)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1.04, color: 'var(--fg)', marginBottom: '1.4rem' }}>
            3 pasos.<br />Cero esfuerzo tuyo.
          </h2>
          <p style={{ color: 'var(--fg-hi)', fontSize: '1.1rem', lineHeight: 1.65, maxWidth: '36rem', fontWeight: 400 }}>
            Conectas tu base de datos, definimos tu tono y servicios, y el agente empieza a contactar pacientes en menos de 48 horas. Tú solo recibes citas en tu calendario.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative flex flex-col pr-0 md:pr-14"
              style={{
                opacity:    stepVisible[i] ? 1 : 0,
                transform:  stepVisible[i] ? 'translateY(0)' : 'translateY(36px)',
                transition: `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${i * 100}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${i * 100}ms`,
              }}
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute" style={{ top: 'clamp(2.5rem,4.5vw,3.8rem)', right: 0, width: '3.5rem', height: '1px', borderTop: '1.5px dashed var(--border-2)' }} />
              )}
              <StepNumber target={step.num} label={step.label} isActive={hasEntered} delay={i * 200} />
              <h3 className="mt-5 mb-3" style={{ fontSize: 'clamp(1.45rem,2.3vw,1.8rem)', fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--fg)', whiteSpace: 'pre-line', lineHeight: 1.15 }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--fg-mid)', fontSize: '0.975rem', lineHeight: 1.65, maxWidth: '20rem', fontWeight: 400 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
