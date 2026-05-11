import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type ThemeCtx = { isDark: boolean; toggle: () => void }

const ThemeContext = createContext<ThemeCtx>({ isDark: false, toggle: () => {} })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, toggle: () => setIsDark((d) => !d) }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
