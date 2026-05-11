import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = ['Producto', 'Cómo funciona', 'Resultados', 'Precios', 'Contacto']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { isDark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      style={{
        transition: 'background 400ms cubic-bezier(0.16,1,0.3,1), backdrop-filter 400ms ease, border-color 400ms ease',
        background: scrolled ? 'rgba(4,16,43,0.84)' : 'transparent',
        backdropFilter: scrolled ? 'blur(22px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(22px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <a href="#" className="flex items-center">
        <img
          src="/assets/brand/nureom.png"
          alt="Nureom"
          style={{ height: '42px', width: 'auto' }}
        />
      </a>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-white/60 hover:text-white text-sm"
              style={{ fontWeight: 500, transition: 'color 240ms ease' }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side: dark mode toggle + CTA */}
      <div className="flex items-center gap-3">
        {/* Dark mode toggle */}
        <button
          onClick={toggle}
          aria-label="Cambiar modo"
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(255,255,255,0.10)',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            transition: 'background 250ms ease, border-color 250ms ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.18)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.10)'
          }}
        >
          <span key={isDark ? 'sun' : 'moon'} className="icon-swap">
            {isDark
              ? <Sun size={15} className="text-white/80" />
              : <Moon size={15} className="text-white/80" />
            }
          </span>
        </button>

        {/* CTA */}
        <button
          className="bg-white text-[#04102B] rounded-full px-5 py-2 text-sm hover:bg-[#0047FF] hover:text-white"
          style={{ fontWeight: 500, transition: 'background 260ms cubic-bezier(0.16,1,0.3,1), color 260ms ease' }}
        >
          Agendar demo
        </button>
      </div>
    </nav>
  )
}
