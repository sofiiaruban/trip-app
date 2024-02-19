import { FC } from 'react'
import TripItem from './TripItem/TripItem'
import { Trip } from '../../types'
import styles from './TripsList.module.css'
import ButtonIcon from '../Buttons/ButtonIcon'
import { FaPlus } from 'react-icons/fa6'

interface TripsProps {
  trips: Trip[]
}
const TripsList: FC<TripsProps> = ({ trips }) => {
  return (
    <ul className={styles.tripsList}>
      {trips.map((trip) => (
        <li key={trip.cityName}>
          <TripItem
            cityImgSrc={trip.cityImgSrc}
            cityName={trip.cityName}
            startDate={trip.startDate}
            endDate={trip.endDate}
          />
        </li>
      ))}
      <li className={styles.addTripItem}>
        <ButtonIcon>
          <FaPlus />
          <p className={styles.addTripTitle}>Add trip</p>
        </ButtonIcon>
      </li>
    </ul>
  )
}

export default TripsList
