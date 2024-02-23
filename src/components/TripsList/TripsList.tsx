import { FC, useState } from 'react'
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
  const [activeIndex, setActiveIndex] = useState(0)

  const modalHandler = () => {
    openModal()
  }
  const handleTripItemClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className={styles.tripsListContainer}>
      <ul className={styles.tripsList}>
        {trips.map((trip, index) => (
          <li key={`${trip.cityName}${index}`}>
            <TripItem
              cityImgSrc={trip.cityImgSrc}
              cityName={trip.cityName}
              startDate={trip.startDate}
              endDate={trip.endDate}
              isActive={index === activeIndex}
              setIsActive={() => handleTripItemClick(index)}
            />
          </li>
        ))}
      </ul>
      <div className={styles.addTripItem}>
        <ButtonIcon onClick={modalHandler}>
          <FaPlus />
          <p className={styles.addTripTitle}>Add trip</p>
          <ModalBox title="Create trip" isOpen={isOpen} closeModal={closeModal}>
            <ModalBoxContent closeModal={closeModal} />
          </ModalBox>
        </ButtonIcon>
      </div>
    </div>
  )
}

export default TripsList
