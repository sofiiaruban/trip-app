import { FC, MouseEventHandler } from 'react'
import classnames from 'classnames'
import styles from './Buttons.module.css'

import { ButtonColor, ButtonType } from './constants'

interface ButtonProps {
  title: string
  color?: ButtonColor
  type?: ButtonType
  onClick?: MouseEventHandler<HTMLElement>
}

const Button: FC<ButtonProps> = ({
  title,
  onClick,
  color = ButtonColor.PRIMARY,
  type = ButtonType.SUBMIT
}) => {
  const buttonClasses = classnames(styles.button, styles[`${color}`])

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {title}
    </button>
  )
}

export default Button
