import { useTheme } from '../context/ThemeContext'

const productLinks = ['Cómo funciona', 'Resultados', 'Garantía', 'Precios']
const companyLinks = ['Agendar demo', 'Contacto', 'Términos', 'Privacidad']

export default function Footer() {
  const { isDark } = useTheme()

  return (
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
                <li key={link}>
                  <a
                    href="#"
                    style={{ color: 'var(--fg-mid)', fontSize: '0.875rem', fontWeight: 400, textDecoration: 'none', transition: 'color 200ms ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-mid)')}
                  >
                    {link}
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
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{ color: 'var(--fg-mid)', fontSize: '0.875rem', fontWeight: 400, textDecoration: 'none', transition: 'color 200ms ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-mid)')}
                  >
                    {link}
                  </a>
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
  )
}
