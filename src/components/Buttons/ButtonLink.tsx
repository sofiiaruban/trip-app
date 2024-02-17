import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ButtonType } from './constants'

interface ButtonLinkProps {
  url: string
  title: string
  type?: ButtonType
}

const ButtonLink: FC<ButtonLinkProps> = ({
  url,
  title,
  type = ButtonType.BUTTON
}) => {
  return (
    <Link to={url}>
      <button type={type}>{title}</button>
    </Link>
  )
}

export default ButtonLink
