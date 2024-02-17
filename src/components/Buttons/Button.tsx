import { FC } from 'react'
import classnames from 'classnames'
import styles from './Buttons.module.css'

import { ButtonColor, ButtonType } from './constants'

interface ButtonProps {
  title: string
  color?: ButtonColor
  type?: ButtonType
}

const Button: FC<ButtonProps> = ({
  title,
  color = ButtonColor.PRIMARY,
  type = ButtonType.SUBMIT
}) => {
  const buttonClasses = classnames(styles.button, styles[`button-${color}`])

  return (
    <button type={type} className={buttonClasses}>
      {title}
    </button>
  )
}

export default Button
