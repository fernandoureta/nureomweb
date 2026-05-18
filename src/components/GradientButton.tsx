const DEMO_URL = 'https://cal.com/fernando-ureta-7nzeoh/demo-nureom'

const LAYERS = [
  { delay: '0s',    duration: '25s'   },
  { delay: '0.15s', duration: '15.9s' },
  { delay: '0.53s', duration: '26.4s' },
  { delay: '0.45s', duration: '17.8s' },
  { delay: '1.6s',  duration: '19.2s' },
  { delay: '1.6s',  duration: '29.2s' },
  { delay: '1.6s',  duration: '20.2s' },
]

interface Props {
  label?: string
  href?: string
}

export default function GradientButton({ label = 'Activar mi clínica', href = DEMO_URL }: Props) {
  const open = () => window.open(href, '_blank', 'noopener,noreferrer')
  return (
    <div
      className="gbtn-wrapper"
      onClick={open}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && open()}
    >
      <div className="gbtn-light" />
      {LAYERS.map((l, i) => (
        <div
          key={i}
          className="gbtn-layer"
          style={{ animationDelay: l.delay, animationDuration: l.duration }}
        />
      ))}
      <span className="gbtn-text">{label}</span>
    </div>
  )
}
