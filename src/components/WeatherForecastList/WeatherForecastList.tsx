import { FC } from 'react'
import WeatherForecastItem from './WeatherForecastItem/WeatherForecastItem'
import styles from './WeatherForecastList.module.css'
import { Day } from '@app/types/types'

interface WeatherForecastListProps {
  forecastList: Day[]
}

const WeatherForecastList: FC<WeatherForecastListProps> = ({
  forecastList
}) => {
  return (
    <ul className={styles.list}>
      {forecastList.map((item) => (
        <li key={item.datetime}>
          <WeatherForecastItem
            date={item.datetime}
            iconSrc={`@app/assets/${item.icon}.svg`}
            iconName={item.icon}
            degree={`${item.temp}/${item.feelslike}`}
          />
        </li>
      ))}
    </ul>
  )
}

export default WeatherForecastList
