import { FC, FormEvent, useState } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import { CiCalendar } from 'react-icons/ci'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './ModalBoxContent.module.css'
import Button from '../Buttons/Button'
import { ButtonColor, ButtonType } from '../Buttons/constants'
import { CityList } from '@app/constants'

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
  startDate: Date | null
  endDate: Date | null
}

const ModalBoxContent: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    city: null,
    startDate: null,
    endDate: null
  })

  const handleInputChange = (fieldName: keyof FormData, value: unknown) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value
    }))
  }

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault()
    console.log(formData)
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
        />
      </div>
      <div className={styles.datePicker}>
        <label>
          <span>*</span> Start date:
        </label>
        <DatePicker
          showIcon
          selected={formData.startDate}
          onChange={(date) => handleInputChange('startDate', date)}
          icon={<CiCalendar />}
          selectsStart
          startDate={formData.startDate}
          endDate={formData.endDate}
          placeholderText="Select date"
        />
      </div>
      <div className={styles.datePicker}>
        <label>
          <span>*</span> End Date:
        </label>
        <DatePicker
          showIcon
          selected={formData.endDate}
          onChange={(date) => handleInputChange('endDate', date)}
          icon={<CiCalendar />}
          selectsEnd
          startDate={formData.startDate}
          endDate={formData.endDate}
          minDate={formData.startDate}
          placeholderText="Select date"
        />
      </div>

      <div className={styles['buttons-section']}>
        <Button
          type={ButtonType.RESET}
          title="Cancel"
          color={ButtonColor.BASIC}
        />
        <Button title="Save" />
      </div>
    </form>
  )
}

export default ModalBoxContent
