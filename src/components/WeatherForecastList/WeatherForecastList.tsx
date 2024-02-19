import { FC } from 'react'
import WeatherForecastItem from './WeatherForecastItem/WeatherForecastItem'
import { DailyWeather } from './types'
import styles from './WeatherForecastList.module.css'

interface WeatherForecastListProps {
  forecastList: DailyWeather[]
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
