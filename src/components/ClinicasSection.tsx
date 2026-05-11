import { useSectionReveal } from '../hooks/useSectionReveal'

const clinicTypes = [
  { name: 'Medicina Estética',    font: '"Times New Roman", Times, serif',              weight: 400, tracking: '0.02em',  size: '14px' },
  { name: 'DERMATOLOGÍA',         font: '"Arial Black", Arial, sans-serif',             weight: 900, tracking: '0.08em',  size: '16px' },
  { name: 'Spa Médico',           font: 'Georgia, serif',                               weight: 600, tracking: '-0.02em', size: '17px' },
  { name: 'Botox & Fillers',      font: 'Helvetica, Arial, sans-serif',                 weight: 700, tracking: '-0.01em', size: '15px' },
  { name: 'LÁSER',                font: 'Impact, Haettenschweiler, sans-serif',         weight: 700, tracking: '0.05em',  size: '18px' },
  { name: 'Tricología',           font: '"Palatino Linotype", Palatino, serif',         weight: 500, tracking: '0.03em',  size: '15px' },
  { name: 'NUTRICIÓN ESTÉTICA',   font: 'Verdana, Geneva, sans-serif',                  weight: 700, tracking: '0.06em',  size: '14px' },
  { name: 'Odontología Estética', font: '"Courier New", Courier, monospace',            weight: 700, tracking: '0.18em',  size: '14px' },
]

export default function ClinicasSection() {
  const { ref, sectionStyle } = useSectionReveal(0.15)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-12 px-6"
      style={{
        background: 'var(--bg)',
        borderTop:    '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        ...sectionStyle,
      }}
    >
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        <div className="md:col-span-1">
          <p style={{ color: 'var(--fg-hi)', fontSize: '1rem', fontWeight: 400, lineHeight: 1.45, maxWidth: '14rem' }}>
            Diseñado para clínicas<br />que pierden plata<br />en silencio.
          </p>
        </div>

        <div className="md:col-span-3 overflow-hidden">
          <div className="marquee-clinicas-track">
            {[...clinicTypes, ...clinicTypes].map((item, i) => (
              <span
                key={i}
                className="whitespace-nowrap select-none"
                style={{
                  fontFamily:    item.font,
                  fontWeight:    item.weight,
                  letterSpacing: item.tracking,
                  fontSize:      item.size,
                  color:         'var(--fg-low)',
                  paddingRight:  '3.5rem',
                }}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
