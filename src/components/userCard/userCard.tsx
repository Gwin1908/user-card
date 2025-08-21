//styles and icons
import { defaultAvatar } from "../../assets/icons"
import "./userCard.scss"

//types
import { type FC } from "react"
import type { User } from "../../pages/userPage"

type UserCardProps = {
  user: User
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <article className={`user-card`}>
      <div className="user-card__avatar">
        {user.avatarUrl ? (
          <img src={user.avatarUrl} alt={`${user.name}'s avatar`} />
        ) : (
          defaultAvatar
        )}
      </div>
      <h2 className="user-card__name">{user.name}</h2>
      <p className="user-card__occupation">{user.occupation}</p>
      <p className="user-card__description">{user.description}</p>
    </article>
  )
}

export default UserCard
