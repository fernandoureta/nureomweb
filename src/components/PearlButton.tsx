const DEMO_URL = 'https://cal.com/fernando-ureta-7nzeoh/demo-nureom'

interface Props {
  label?: string
  href?: string
}

export default function PearlButton({ label = 'Agendar demo', href = DEMO_URL }: Props) {
  const open = () => window.open(href, '_blank', 'noopener,noreferrer')
  return (
    <button className="pearl-btn" onClick={open} type="button">
      <div className="pearl-wrap">
        <p>
          <span>✧</span>
          <span>✦</span>
          {label}
        </p>
      </div>
    </button>
  )
}
