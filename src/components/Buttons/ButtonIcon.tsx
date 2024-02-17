import { FC, ReactNode } from 'react'
import { ButtonType } from './constants'

interface ButtonIconProps {
  children: ReactNode
  type?: ButtonType
}

const ButtonIcon: FC<ButtonIconProps> = ({
  children,
  type = ButtonType.BUTTON
}) => {
  return <button type={type}>{children}</button>
}

export default ButtonIcon
