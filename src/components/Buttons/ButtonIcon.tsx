import { FC, MouseEventHandler, ReactNode } from 'react'
import { ButtonType } from './constants'
import styles from './Buttons.module.css'

interface ButtonIconProps {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLElement>
  type?: ButtonType
}

const ButtonIcon: FC<ButtonIconProps> = ({
  children,
  onClick,
  type = ButtonType.BUTTON
}) => {
  return (
    <button type={type} onClick={onClick} className={styles.buttonIcon}>
      {children}
    </button>
  )
}

export default ButtonIcon
