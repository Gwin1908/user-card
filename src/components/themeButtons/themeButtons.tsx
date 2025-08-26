//styles
import "./themeButtons.scss"

//context
import useTheme from "../../context/theme/useTheme"

const ThemeButtons = () => {
  const { theme, toggleTheme } = useTheme()

  const handleToggle = () => {
    toggleTheme()
  }

  return (
    <div className="theme-toggle" aria-label="Theme selector">
      <button
        className={`theme-toggle__bttn left ${
          theme === "light" ? "is-active" : ""
        }`}
        onClick={() => handleToggle()}
        aria-selected={theme === "light"}
      >
        Light
      </button>
      <button
        className={`theme-toggle__bttn right ${
          theme === "dark" ? "is-active" : ""
        }`}
        onClick={() => handleToggle()}
        aria-selected={theme === "dark"}
      >
        Dark
      </button>
    </div>
  )
}

export default ThemeButtons
