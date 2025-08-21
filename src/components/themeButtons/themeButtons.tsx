//styles
import "./themeButtons.scss"

//context
import useTheme from "../../context/theme/useTheme"

const ThemeButtons = () => {
  const { theme, setTheme } = useTheme()

  const handleToggle = (next: "light" | "dark") => {
    setTheme(next)
  }

  return (
    <div className="theme-toggle" aria-label="Theme selector">
      <button
        className={`theme-toggle__bttn left ${
          theme === "light" ? "is-active" : ""
        }`}
        onClick={() => handleToggle("light")}
        aria-selected={theme === "light"}
      >
        Light
      </button>
      <button
        className={`theme-toggle__bttn right ${
          theme === "dark" ? "is-active" : ""
        }`}
        onClick={() => handleToggle("dark")}
        aria-selected={theme === "dark"}
      >
        Dark
      </button>
    </div>
  )
}

export default ThemeButtons
