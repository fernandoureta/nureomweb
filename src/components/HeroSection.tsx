import { useEffect, useState } from 'react'
import ArrowButton from './ArrowButton'

const techStack = [
  { name: 'Claude API',        font: '"Plus Jakarta Sans", system-ui, sans-serif', weight: 600, tracking: '-0.01em', size: '13px' },
  { name: 'n8n',               font: '"Plus Jakarta Sans", system-ui, sans-serif', weight: 600, tracking: '0.02em',  size: '15px' },
  { name: 'WhatsApp Business', font: 'Helvetica, Arial, sans-serif',               weight: 600, tracking: '0.01em',  size: '13px' },
  { name: 'Cal.com',           font: 'Georgia, serif',                             weight: 600, tracking: '-0.02em', size: '14px' },
  { name: 'Airtable',          font: 'Verdana, sans-serif',                        weight: 600, tracking: '0.04em',  size: '12px' },
  { name: '360DIALOG',         font: '"Courier New", Courier, monospace',          weight: 600, tracking: '0.12em',  size: '12px' },
]

/* Anima cada palabra: slide-up desde un clip invisible */
function WordReveal({
  text,
  isVisible,
  delay = 0,
}: {
  text: string
  isVisible: boolean
  delay?: number
}) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
        >
          <span
            style={{
              display: 'inline-block',
              transform: isVisible ? 'translateY(0)' : 'translateY(108%)',
              opacity: isVisible ? 1 : 0,
              transition: `transform 850ms cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * 65}ms,
                           opacity 500ms ease ${delay + i * 65}ms`,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 && (
            <span style={{ display: 'inline-block', width: '0.28em' }} />
          )}
        </span>
      ))}
    </>
  )
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-2xl hero-noise"
      style={{ background: '#04102B' }}
    >
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/hero/mascot.png"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      >
        <source src="/assets/hero/video.mp4" type="video/mp4" />
      </video>

      {/* Gradiente — más oscuro a la izquierda */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(4,16,43,0.92) 0%, rgba(4,16,43,0.65) 45%, rgba(4,16,43,0.08) 100%)',
          zIndex: 2,
        }}
      />

      {/* Light bleed azul — esquina superior izquierda */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-14%',
          left: '-7%',
          width: '50%',
          height: '70%',
          background: 'rgba(0,71,255,0.18)',
          filter: 'blur(140px)',
          zIndex: 3,
        }}
      />

      {/* Contenido */}
      <div
        className="relative h-full flex flex-col justify-between px-8 md:px-14 pt-28 pb-0"
        style={{ zIndex: 10 }}
      >
        {/* Texto principal */}
        <div className="grid grid-cols-12 flex-1">
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center pt-8 pb-12">

            {/* Eyebrow badge */}
            <div
              className="w-fit mb-6"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 600ms ease 80ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 80ms',
              }}
            >
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs"
                style={{
                  background: 'rgba(127,163,255,0.12)',
                  border: '1px solid rgba(127,163,255,0.22)',
                  color: '#7FA3FF',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: '#7FA3FF' }}
                />
                Agente IA para clínicas estéticas
              </span>
            </div>

            {/* H1 — animación por palabras */}
            <h1
              className="text-white mb-6"
              style={{
                fontSize: 'clamp(3rem, 5.8vw, 5.2rem)',
                fontWeight: 500,
                lineHeight: 1.04,
                letterSpacing: '-0.04em',
              }}
            >
              <WordReveal text="Tu clínica," isVisible={visible} delay={160} />
              <br />
              <WordReveal text="siempre presente." isVisible={visible} delay={320} />
            </h1>

            {/* Subtítulo */}
            <p
              className="text-white/60 mb-10"
              style={{
                fontSize: 'clamp(0.95rem, 1.1vw, 1.08rem)',
                maxWidth: '27rem',
                lineHeight: 1.68,
                fontWeight: 400,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 700ms ease 680ms, transform 700ms cubic-bezier(0.16,1,0.3,1) 680ms',
              }}
            >
              Recuperamos pacientes inactivos en clínicas estéticas con un agente de IA que conversa, agenda y llena tu calendario. No pagas hasta que agenden.
            </p>

            {/* CTA */}
            <div
              className="w-fit"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 700ms ease 860ms, transform 700ms cubic-bezier(0.16,1,0.3,1) 860ms',
              }}
            >
              <ArrowButton label="Agendar demo de 15 min" variant="light-on-dark" />
            </div>
          </div>
        </div>

        {/* Marquee técnico */}
        <div
          className="overflow-hidden pb-8 pt-5"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 800ms ease 1100ms',
          }}
        >
          <div className="marquee-track">
            {[...techStack, ...techStack].map((item, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-white/30 select-none"
                style={{
                  fontFamily: item.font,
                  fontWeight: item.weight,
                  letterSpacing: item.tracking,
                  fontSize: item.size,
                  paddingRight: '3.5rem',
                }}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
