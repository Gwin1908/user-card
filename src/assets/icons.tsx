export const defaultAvatar = (
  <svg
    width="100"
    height="100"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath id="avatarClip">
        <circle cx="100" cy="100" r="100" />
      </clipPath>
    </defs>
    <circle cx="100" cy="100" r="100" fill="var(--color-avatar-bg)" />
    <g clipPath="url(#avatarClip)">
      <circle cx="100" cy="70" r="35" fill="var(--color-avatar-body)" />
      <path
        d="M 40 160 Q 40 120 100 120 Q 160 120 160 160 L 160 220 L 40 220 Z"
        fill="var(--color-avatar-body)"
      />
    </g>
  </svg>
)
