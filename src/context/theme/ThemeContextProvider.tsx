//react
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

//context
import ThemeContext, { type Theme, type ThemeContextValue } from "./context"

type ThemeContextProviderProps = {
  initialTheme?: Theme
  children: ReactNode
}

export const ThemeContextProvider = ({
  initialTheme = "light",
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    // Check for saved user preference in localStorage
    const savedTheme = localStorage.getItem("theme") as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // If no saved preference, use initial theme
      setTheme(initialTheme)
    }
  }, [initialTheme])

  // Apply data-theme to the html element so variables cascade everywhere
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute("data-theme", theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }, [])

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, toggleTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
