import { ThemeProvider } from './context/ThemeContext'
import SpotlightCursor from './components/SpotlightCursor'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import InfoSection from './components/InfoSection'
import ClinicasSection from './components/ClinicasSection'
import ComoFuncionaSection from './components/ComoFuncionaSection'
import GarantiaSection from './components/GarantiaSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <SpotlightCursor />
      <div style={{ background: 'var(--bg)', minHeight: '100vh', transition: 'background-color 380ms ease' }}>
        {/* Hero — full viewport, con marco exterior */}
        <div className="relative" style={{ height: '100vh', padding: '0.75rem' }}>
          <Navbar />
          <HeroSection />
        </div>

        <InfoSection />
        <ClinicasSection />
        <ComoFuncionaSection />
        <GarantiaSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
