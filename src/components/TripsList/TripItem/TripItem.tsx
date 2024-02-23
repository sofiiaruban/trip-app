import { FC } from 'react'
import styles from './TripItem.module.css'
import { Trip } from '@app/types/types'
import classnames from 'classnames'
interface TripItemProps extends Trip {
  isActive?: boolean
  setIsActive: (isActive: boolean) => void
}

const TripItem: FC<TripItemProps> = ({
  cityImgSrc,
  cityName,
  startDate,
  endDate,
  isActive,
  setIsActive
}) => {
  const formattedStartDate = new Date(startDate).toLocaleDateString()
  const formattedEndDate = new Date(endDate).toLocaleDateString()

  const itemHandle = () => {
    setIsActive(true)
  }
  const tripClasses = classnames(styles.trip, { [styles.active]: isActive })
  return (
    <article className={tripClasses} onClick={itemHandle}>
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
