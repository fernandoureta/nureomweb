import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import PolicyModal from './PolicyModal'

const DEMO_URL = 'https://cal.com/fernando-ureta-7nzeoh/demo-nureom'

const productLinks = [
  { label: 'Cómo funciona', href: '#como-funciona', external: false },
  { label: 'Resultados',    href: '#resultados',    external: false },
  { label: 'Garantía',      href: '#precios',       external: false },
  { label: 'Precios',       href: '#precios',       external: false },
]

const linkStyle = { color: 'var(--fg-mid)', fontSize: '0.875rem', fontWeight: 400, textDecoration: 'none', transition: 'color 200ms ease', cursor: 'pointer' } as const

export default function Footer() {
  const { isDark } = useTheme()
  const [modal, setModal] = useState<'terms' | 'privacy' | null>(null)

  return (
    <>
    <footer className="px-6 pt-16 pb-8" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border-2)' }}>
      <div className="max-w-8xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Marca */}
          <div className="md:col-span-4">
            <div className="mb-5">
              <img
                src={isDark ? '/assets/brand/nureom.png' : '/assets/brand/nureom_dark.png'}
                alt="Nureom"
                style={{
                  height: '52px',
                  width: 'auto',
                  display: 'block',
                  transition: 'opacity 300ms ease',
                }}
              />
            </div>
            <p style={{ color: 'var(--fg-mid)', fontSize: '0.9rem', lineHeight: 1.65, maxWidth: '22rem', fontWeight: 400 }}>
              Tu clínica, siempre presente.
            </p>
          </div>

          {/* Producto */}
          <div className="md:col-span-4">
            <p style={{ color: 'var(--fg)', fontSize: '0.875rem', fontWeight: 500, marginBottom: '1.25rem' }}>
              Producto
            </p>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (!link.external && link.href !== '#') {
                        e.preventDefault()
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    style={{ color: 'var(--fg-mid)', fontSize: '0.875rem', fontWeight: 400, textDecoration: 'none', transition: 'color 200ms ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-mid)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div className="md:col-span-4">
            <p style={{ color: 'var(--fg)', fontSize: '0.875rem', fontWeight: 500, marginBottom: '1.25rem' }}>
              Empresa
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Agendar demo', action: () => window.open(DEMO_URL, '_blank', 'noopener,noreferrer') },
                { label: 'Contacto',     action: () => window.open(DEMO_URL, '_blank', 'noopener,noreferrer') },
                { label: 'Términos',     action: () => setModal('terms') },
                { label: 'Privacidad',   action: () => setModal('privacy') },
              ].map(({ label, action }) => (
                <li key={label}>
                  <button
                    onClick={action}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-mid)')}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p style={{ color: 'var(--fg-low)', fontSize: '0.75rem', fontWeight: 400 }}>
            © 2025 Nureom. Todos los derechos reservados.
          </p>
          <p style={{ color: 'var(--fg-low)', fontSize: '0.75rem', fontWeight: 400 }}>
            Hecho con IA por humanos.
          </p>
        </div>
      </div>
    </footer>

    {modal && <PolicyModal type={modal} onClose={() => setModal(null)} />}
  </>
  )
}
