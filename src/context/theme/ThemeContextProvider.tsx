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

    // Check if the user has a dark scheme preference in their browser
    const checkIsDarkSchemePreferred = () =>
      window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches ?? false

    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      //If no saved preference, check for browser theme
      if (checkIsDarkSchemePreferred()) {
        setTheme("dark")
      } else {
        setTheme(initialTheme)
      }
    }
  }, [initialTheme])

  // Apply data-theme to the html element so variables cascade everywhere
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute("data-theme", theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light")
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }, [theme])

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, toggleTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
