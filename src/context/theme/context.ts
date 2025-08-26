//react
import { createContext } from "react"

export type Theme = "light" | "dark"

export type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export default ThemeContext
