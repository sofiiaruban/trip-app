import { FC, FormEvent, useState } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import { CiCalendar } from 'react-icons/ci'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './ModalBoxContent.module.css'
import Button from '../Buttons/Button'
import { ButtonColor, ButtonType } from '../Buttons/constants'

interface Option {
  value: string
  label: string
}

const options: Option[] = [
  { value: 'kyiv', label: 'Kyiv' },
  { value: 'lviv', label: 'Lviv' },
  { value: 'odesa', label: 'Odesa' }
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
      <Select
        options={options}
        value={formData.city}
        onChange={(value) => handleInputChange('city', value)}
      />
      <DatePicker
        showIcon
        selected={formData.startDate}
        onChange={(date) => handleInputChange('startDate', date)}
        icon={<CiCalendar />}
        selectsStart
        startDate={formData.startDate}
        endDate={formData.endDate}
      />
      <DatePicker
        showIcon
        selected={formData.endDate}
        onChange={(date) => handleInputChange('endDate', date)}
        icon={<CiCalendar />}
        selectsEnd
        startDate={formData.startDate}
        endDate={formData.endDate}
        minDate={formData.startDate}
      />
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
