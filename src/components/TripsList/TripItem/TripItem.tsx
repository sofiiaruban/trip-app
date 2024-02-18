import { FC } from 'react'
import styles from './TripItem.module.css'
import { TripProps } from '../types'

const TripItem: FC<TripProps> = ({
  cityImgSrc,
  cityName,
  startDate,
  endDate
}) => {
  const formattedStartDate = startDate.toLocaleDateString()
  const formattedEndDate = endDate.toLocaleDateString()

  return (
    <article className={styles.trip}>
      <img
        src={cityImgSrc}
        className={styles.cityImg}
        alt={`${cityName} city`}
      />
      <div className={styles.tripInfo}>
        <p className={styles.cityName}>{cityName}</p>
        <p className={styles.tripDates}>
          <span>{formattedStartDate}</span> - <span>{formattedEndDate}</span>
        </p>
      </div>
    </article>
  )
}

export default TripItem
