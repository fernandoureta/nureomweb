import { ArrowRight } from 'lucide-react'

interface ArrowButtonProps {
  label: string
  variant?: 'dark-on-light' | 'light-on-dark' | 'brand'
  className?: string
  onClick?: () => void
}

export default function ArrowButton({
  label,
  variant = 'light-on-dark',
  className = '',
  onClick,
}: ArrowButtonProps) {
  if (variant === 'dark-on-light') {
    return (
      <button
        onClick={onClick}
        className={`group inline-flex items-center gap-3 bg-[#04102B] text-white rounded-full px-6 py-3 transition-colors duration-300 hover:bg-[#0047FF] ${className}`}
      >
        <span className="text-base" style={{ fontWeight: 500 }}>{label}</span>
        <span className="w-7 h-7 rounded-full bg-[#0047FF] flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
          <ArrowRight size={14} className="text-white transition-colors duration-300 group-hover:text-[#0047FF]" />
        </span>
      </button>
    )
  }

  if (variant === 'brand') {
    return (
      <button
        onClick={onClick}
        className={`group inline-flex items-center gap-3 bg-[#0047FF] text-white rounded-full px-6 py-3 transition-colors duration-300 hover:bg-white hover:text-[#0047FF] ${className}`}
      >
        <span className="text-base" style={{ fontWeight: 500 }}>{label}</span>
        <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center transition-colors duration-300 group-hover:bg-[#0047FF]">
          <ArrowRight size={14} className="text-[#0047FF] transition-colors duration-300 group-hover:text-white" />
        </span>
      </button>
    )
  }

  // light-on-dark (hero default)
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-3 bg-white text-[#04102B] rounded-full px-6 py-3.5 transition-colors duration-300 hover:bg-[#0047FF] hover:text-white ${className}`}
    >
      <span className="text-base" style={{ fontWeight: 500 }}>{label}</span>
      <span className="w-7 h-7 rounded-full bg-[#0047FF] flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
        <ArrowRight size={14} className="text-white transition-colors duration-300 group-hover:text-[#0047FF]" />
      </span>
    </button>
  )
}
