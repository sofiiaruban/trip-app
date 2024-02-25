import { FC, FormEvent, useState } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './ModalBoxContent.module.css'
import Button from '../Buttons/Button'
import { ButtonColor, ButtonType } from '../Buttons/constants'
import { CityList } from '@app/constants'
import findImgUrlByCity from '@app/helpers/findImgUrlByCity'
import { addTrip } from '@app/store/tripSlice'
import { useDispatch } from 'react-redux'

interface Option {
  value: string
  label: string
}

const options: Option[] = [
  { value: CityList.KYIV, label: CityList.KYIV },
  { value: CityList.NEW_YORK, label: CityList.NEW_YORK },
  { value: CityList.LONDON, label: CityList.LONDON }
]

interface FormData {
  city: Option | null
  startDate: Date
  endDate: Date
}
interface ModalBoxContentProps {
  closeModal: () => void
}
const ModalBoxContent: FC<ModalBoxContentProps> = ({ closeModal }) => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState<FormData>({
    city: null,
    startDate: new Date(),
    endDate: new Date()
  })

  const handleInputChange = (fieldName: keyof FormData, value: unknown) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value
    }))
  }

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault()
    if (formData.city) {
      const cityImgSrc = findImgUrlByCity(formData.city.value)
      if (cityImgSrc) {
        const tripData = {
          cityImgSrc,
          cityName: formData.city.label,
          startDate: formData.startDate!,
          endDate: formData.endDate!
        }
        dispatch(addTrip(tripData))
        closeModal()
      }
    }
  }

  return (
    <form onSubmit={handleSubmitForm} className={styles.content}>
      <div className={styles.city}>
        <label>
          <span>*</span> City:
        </label>
        <Select
          options={options}
          value={formData.city}
          onChange={(value) => handleInputChange('city', value)}
          placeholder="Please select city"
          required
        />
      </div>
      <div className={styles.datePicker}>
        <label>
          <span>*</span> Start date:
        </label>
        <DatePicker
          selected={formData.startDate}
          onChange={(date) => handleInputChange('startDate', date)}
          selectsStart
          startDate={formData.startDate}
          endDate={formData.endDate}
          placeholderText="Select date"
          required
        />
      </div>
      <div className={styles.datePicker}>
        <label>
          <span>*</span> End Date:
        </label>
        <DatePicker
          selected={formData.endDate}
          onChange={(date) => handleInputChange('endDate', date)}
          selectsEnd
          startDate={formData.startDate}
          endDate={formData.endDate}
          minDate={formData.startDate}
          placeholderText="Select date"
          required
        />
      </div>
      <div className={styles['buttons-section']}>
        <Button
          type={ButtonType.RESET}
          title="Cancel"
          color={ButtonColor.BASIC}
          onClick={closeModal}
        />
        <Button title="Save" />
      </div>
    </form>
  )
}

export default ModalBoxContent
