//react
import { useContext } from "react"

//context
import ThemeContext, { type ThemeContextValue } from "./context"

const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return ctx
}

export default useTheme
