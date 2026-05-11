interface LogoIconProps {
  className?: string
  size?: number
}

export default function LogoIcon({ className = '', size = 32 }: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M128 16C66.144 16 16 66.144 16 128C16 189.856 66.144 240 128 240C189.856 240 240 189.856 240 128C240 66.144 189.856 16 128 16ZM128 40C182.124 40 226 83.876 226 128C226 172.124 182.124 216 128 216C73.876 216 30 172.124 30 128C30 83.876 73.876 40 128 40Z"
      />
      {/* Left eye */}
      <ellipse cx="97" cy="108" rx="10" ry="13" />
      {/* Right eye */}
      <ellipse cx="159" cy="108" rx="10" ry="13" />
      {/* Smile — closed path */}
      <path d="M88 148C88 148 101 174 128 174C155 174 168 148 168 148C168 148 161 160 128 160C95 160 88 148 88 148Z" />
    </svg>
  )
}
