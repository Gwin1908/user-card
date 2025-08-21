//styles
import "./userPage.scss"

//components
import ThemeButtons from "../components/themeButtons/themeButtons"
import UserCard from "../components/userCard/userCard"

//context
import useTheme from "../context/theme/useTheme"

export type User = {
  id: number
  name: string
  occupation: string
  description: string
  avatarUrl?: string
}

const USER: User = {
  id: 1,
  name: "John Doe",
  occupation: "Software Engineer",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}

const UserPage = () => {
  const { theme } = useTheme()

  return (
    <section className={`user-page user-page--${theme}`}>
      <div className="user-page__wrapper">
        <ThemeButtons />
        <UserCard user={USER} />
      </div>
    </section>
  )
}

export default UserPage
