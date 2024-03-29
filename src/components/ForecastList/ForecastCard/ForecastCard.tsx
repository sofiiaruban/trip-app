import { FC } from 'react'
import getDayFromDate from '@app/helpers/getDayFromDate'
import { ForecastProps } from '@app/types/types'
import styles from './ForecastCard.module.css'
import { ForecastCardType } from '../constants'
import classnames from 'classnames'

const ForecastCard: FC<ForecastProps> = ({
  date,
  iconSrc,
  iconName,
  degree,
  children,
  type = ForecastCardType.SMALL
}) => {
  const day = getDayFromDate(date)
  const cardClasses = classnames(styles.card, styles[type])

  return (
    <article className={cardClasses}>
      <p className={styles[`day-${type}`]}>{day}</p>
      <div className={styles[`weatherInfo-${type}`]}>
        <img src={iconSrc} alt={iconName} className={styles[`img-${type}`]} />
        <p className={styles[`degree-${type}`]}>
          {degree} <span>°F</span>
        </p>
      </div>
      {children}
    </article>
  )
}

export default ForecastCard
