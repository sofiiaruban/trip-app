import { FC } from 'react'
import moment from 'moment'

interface WeatherForecastItemProps {
  date: string
  iconSrc: string
  iconName: string
  degree: string
}

const WeatherForecastItem: FC<WeatherForecastItemProps> = ({
  date,
  iconSrc,
  iconName,
  degree
}) => {
  const day = moment(date).format('dddd')

  return (
    <article>
      <p>{day}</p>
      <img src={iconSrc} alt={iconName} />
      <p>{degree}</p>
    </article>
  )
}

export default WeatherForecastItem
