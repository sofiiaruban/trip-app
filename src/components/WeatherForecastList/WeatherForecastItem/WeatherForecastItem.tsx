import { FC } from 'react'
import { WeatherForecastItemProps } from '../types'
import moment from 'moment'

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
