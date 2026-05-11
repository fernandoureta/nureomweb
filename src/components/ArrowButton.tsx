import { ArrowRight } from 'lucide-react'

interface ArrowButtonProps {
  label: string
  variant?: 'dark-on-light' | 'light-on-dark' | 'brand'
  className?: string
  href?: string
  onClick?: () => void
}

const DEMO_URL = 'https://cal.com/fernando-ureta-7nzeoh/demo-nureom'

export { DEMO_URL }

export default function ArrowButton({ label, variant = 'light-on-dark', className = '', href, onClick }: ArrowButtonProps) {
  const target = href ?? DEMO_URL
  const base = 'group inline-flex items-center gap-3 rounded-full no-underline cursor-pointer'

  const handleClick = () => {
    if (onClick) { onClick(); return }
    window.open(target, '_blank', 'noopener,noreferrer')
  }

  if (variant === 'dark-on-light') {
    return (
      <button onClick={handleClick} className={`${base} bg-[#04102B] text-white px-6 py-3 hover:bg-[#0047FF] transition-colors duration-300 ${className}`}>
        <span className="text-base" style={{ fontWeight: 500 }}>{label}</span>
        <span className="w-7 h-7 rounded-full bg-[#0047FF] flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
          <ArrowRight size={14} className="text-white transition-colors duration-300 group-hover:text-[#0047FF]" />
        </span>
      </button>
    )
  }

  if (variant === 'brand') {
    return (
      <button onClick={handleClick} className={`${base} bg-[#0047FF] text-white px-6 py-3 hover:bg-white hover:text-[#0047FF] transition-colors duration-300 ${className}`}>
        <span className="text-base" style={{ fontWeight: 500 }}>{label}</span>
        <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center transition-colors duration-300 group-hover:bg-[#0047FF]">
          <ArrowRight size={14} className="text-[#0047FF] transition-colors duration-300 group-hover:text-white" />
        </span>
      </button>
    )
  }

  // light-on-dark
  return (
    <button onClick={handleClick} className={`${base} bg-white text-[#04102B] px-6 py-3.5 hover:bg-[#0047FF] hover:text-white transition-colors duration-300 ${className}`}>
      <span className="text-base" style={{ fontWeight: 500 }}>{label}</span>
      <span className="w-7 h-7 rounded-full bg-[#0047FF] flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
        <ArrowRight size={14} className="text-white transition-colors duration-300 group-hover:text-[#0047FF]" />
      </span>
    </button>
  )
}
