import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

interface Props {
  type: 'terms' | 'privacy'
  onClose: () => void
}

function TermsContent() {
  return (
    <>
      <p className="policy-meta">Última actualización: 17 de mayo de 2026</p>

      <h3>1. Aceptación de los Términos</h3>
      <p>Al contratar los servicios de Nureom, usted acepta quedar vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.</p>

      <h3>2. Descripción del Servicio</h3>
      <p>Nureom proporciona un agente de inteligencia artificial que, mediante WhatsApp Business, contacta y recupera pacientes inactivos de clínicas estéticas con el fin de agendar citas. El servicio incluye configuración, integración con el sistema de agendamiento y soporte continuo.</p>

      <h3>3. Registro y Cuenta</h3>
      <p>Para acceder al servicio deberá proporcionar información verídica de su clínica. Usted es responsable de mantener la confidencialidad de sus credenciales de acceso y de todas las actividades que ocurran en su cuenta.</p>

      <h3>4. Precios y Forma de Pago</h3>
      <p>El servicio tiene un costo de <strong>$297 USD mensuales</strong>, facturado mes a mes. El pago se realiza mediante los métodos indicados al momento de la contratación. Nureom se reserva el derecho de modificar los precios con 30 días de aviso previo.</p>

      <h3>5. Garantía de Resultados</h3>
      <p>Nureom garantiza la generación de al menos <strong>5 citas reales dentro de los primeros 7 días</strong> de activación del servicio. Si este objetivo no se cumple, el primer mes del servicio será sin costo para el cliente. Esta garantía aplica una vez por cliente y bajo condición de que la base de pacientes cuente con al menos 100 contactos activos.</p>

      <h3>6. Cancelación del Servicio</h3>
      <p>El cliente puede cancelar el servicio en cualquier momento sin penalidades, con un aviso mínimo de 5 días hábiles antes de la próxima fecha de cobro. No se realizarán reembolsos proporcionales por períodos ya cobrados.</p>

      <h3>7. Uso Aceptable</h3>
      <p>El cliente se compromete a utilizar el servicio únicamente para contactar pacientes que hayan consentido previamente recibir comunicaciones de su clínica. Queda prohibido utilizar el servicio para enviar spam, mensajes engañosos o cualquier comunicación que viole la legislación aplicable.</p>

      <h3>8. Propiedad Intelectual</h3>
      <p>Toda la tecnología, algoritmos, interfaces y materiales de Nureom son propiedad exclusiva de Nureom y están protegidos por las leyes de propiedad intelectual aplicables. El cliente no adquiere ningún derecho sobre la tecnología al contratar el servicio.</p>

      <h3>9. Limitación de Responsabilidad</h3>
      <p>La responsabilidad total de Nureom ante el cliente por cualquier causa no excederá el valor equivalente a un mes de servicio. Nureom no será responsable por daños indirectos, lucro cesante ni pérdida de datos derivados del uso o imposibilidad de uso del servicio.</p>

      <h3>10. Modificaciones</h3>
      <p>Nureom podrá modificar estos Términos en cualquier momento, notificando al cliente con al menos 15 días de anticipación. El uso continuado del servicio después de dicha notificación constituirá aceptación de los nuevos términos.</p>

      <h3>11. Ley Aplicable</h3>
      <p>Estos Términos se rigen por las leyes de la República de Chile. Cualquier disputa será sometida a la jurisdicción de los tribunales competentes de Santiago de Chile.</p>

      <h3>12. Contacto</h3>
      <p>Para consultas sobre estos Términos: <strong>contacto@nureom.com</strong> o vía WhatsApp al <strong>+56 9 5842 1443</strong>.</p>
    </>
  )
}

function PrivacyContent() {
  return (
    <>
      <p className="policy-meta">Última actualización: 17 de mayo de 2026</p>

      <h3>1. Responsable del Tratamiento</h3>
      <p>Nureom, representada por Fernando Ureta, es responsable del tratamiento de los datos personales recopilados a través de este sitio web y del servicio. Contacto: <strong>contacto@nureom.com</strong>.</p>

      <h3>2. Datos que Recopilamos</h3>
      <p>Recopilamos los siguientes datos:</p>
      <ul>
        <li><strong>Datos de la clínica:</strong> nombre, correo electrónico, teléfono y datos de facturación del representante.</li>
        <li><strong>Datos de pacientes:</strong> nombre, número de teléfono e historial de conversación en WhatsApp, proporcionados por la clínica cliente.</li>
        <li><strong>Datos de uso:</strong> métricas de rendimiento del agente, tasas de respuesta y conversión de citas.</li>
        <li><strong>Datos técnicos:</strong> dirección IP, tipo de navegador y cookies de sesión al navegar en nureom.com.</li>
      </ul>

      <h3>3. Finalidad del Tratamiento</h3>
      <p>Los datos son utilizados para: (a) prestar el servicio de recuperación de pacientes; (b) mejorar los modelos de inteligencia artificial; (c) enviar comunicaciones relacionadas con el servicio; (d) cumplir obligaciones legales y contractuales.</p>

      <h3>4. Bases Legales</h3>
      <p>El tratamiento de datos se basa en: (a) ejecución del contrato de servicio; (b) interés legítimo en la mejora del servicio; (c) cumplimiento de obligaciones legales; y (d) consentimiento del titular cuando corresponda.</p>

      <h3>5. Servicios de Terceros</h3>
      <p>Para la prestación del servicio utilizamos:</p>
      <ul>
        <li><strong>WhatsApp Business API (Meta):</strong> mensajería con pacientes.</li>
        <li><strong>Cal.com:</strong> gestión de agendamiento de citas.</li>
        <li><strong>Proveedores cloud:</strong> almacenamiento e infraestructura del servicio.</li>
      </ul>
      <p>Estos terceros cuentan con sus propias políticas de privacidad y medidas de seguridad adecuadas.</p>

      <h3>6. Retención de Datos</h3>
      <p>Los datos de la clínica se conservan durante la vigencia del contrato y hasta 12 meses después de su terminación. Los datos de pacientes se conservan durante la vigencia del contrato y 6 meses adicionales, salvo obligación legal de conservación mayor.</p>

      <h3>7. Sus Derechos</h3>
      <p>De acuerdo a la Ley 19.628 de Chile y normativas aplicables, usted tiene derecho a: acceder a sus datos, rectificarlos, suprimirlos, oponerse a su tratamiento y solicitar la portabilidad de los mismos. Para ejercer estos derechos, contáctenos en <strong>contacto@nureom.com</strong>.</p>

      <h3>8. Seguridad de los Datos</h3>
      <p>Implementamos medidas técnicas y organizativas para proteger sus datos contra acceso no autorizado, pérdida o destrucción, incluyendo cifrado en tránsito y en reposo, control de acceso y auditorías periódicas de seguridad.</p>

      <h3>9. Modificaciones</h3>
      <p>Podemos actualizar esta Política periódicamente. Le notificaremos de cambios significativos por correo electrónico o mediante aviso en el sitio. Le recomendamos revisar esta página regularmente.</p>

      <h3>10. Contacto</h3>
      <p>Para consultas sobre esta Política o para ejercer sus derechos: <strong>contacto@nureom.com</strong> o vía WhatsApp al <strong>+56 9 5842 1443</strong>.</p>
    </>
  )
}

export default function PolicyModal({ type, onClose }: Props) {
  const { isDark } = useTheme()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const modal = (
    <div className="policy-overlay" onClick={onClose}>
      <div
        className="policy-modal"
        style={{ background: isDark ? '#0D1829' : '#fff', color: isDark ? '#EDF0FA' : '#04102B' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="policy-header">
          <h2 style={{ color: isDark ? '#EDF0FA' : '#04102B' }}>
            {type === 'terms' ? 'Términos y Condiciones' : 'Política de Privacidad'}
          </h2>
          <button className="policy-close" onClick={onClose} aria-label="Cerrar">
            <X size={20} />
          </button>
        </div>
        <div className="policy-body" style={{ color: isDark ? 'rgba(237,240,250,0.75)' : 'rgba(4,16,43,0.72)' }}>
          {type === 'terms' ? <TermsContent /> : <PrivacyContent />}
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
