import { FC } from 'react'
import TripItem from './TripItem/TripItem'
import { Trip } from '../../types/types'
import styles from './TripsList.module.css'
import ButtonIcon from '../Buttons/ButtonIcon'
import { FaPlus } from 'react-icons/fa6'
import ModalBoxContent from '../ModalBoxContent/ModalBoxContent'
import ModalBox from '../ModalBox/ModalBox'
import useModal from '../ModalBox/useModalBox'

interface TripsProps {
  trips: Trip[]
}
const TripsList: FC<TripsProps> = ({ trips }) => {
  const { isOpen, openModal, closeModal } = useModal()

  const modalHandler = () => {
    openModal()
  }

  return (
    <ul className={styles.tripsList}>
      {trips.map((trip, index) => (
        <li key={`${trip.cityName}${index}`}>
          <TripItem
            cityImgSrc={trip.cityImgSrc}
            cityName={trip.cityName}
            startDate={trip.startDate}
            endDate={trip.endDate}
          />
        </li>
      ))}
      <li className={styles.addTripItem}>
        <ButtonIcon onClick={modalHandler}>
          <FaPlus />
          <p className={styles.addTripTitle}>Add trip</p>
          <ModalBox title="Create trip" isOpen={isOpen} closeModal={closeModal}>
            <ModalBoxContent />
          </ModalBox>
        </ButtonIcon>
      </li>
    </ul>
  )
}

export default TripsList
