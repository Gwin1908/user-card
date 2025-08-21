//pages
import UserPage from "./pages/userPage"

//context
import { ThemeContextProvider } from "./context/theme/ThemeContextProvider"

function App() {
  return (
    <ThemeContextProvider>
      <UserPage />
    </ThemeContextProvider>
  )
}

export default App
