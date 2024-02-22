import { FC } from 'react'
import ForecastCard from './ForecastCard/ForecastCard'
import styles from './WeatherForecastList.module.css'
import { Day } from '@app/types/types'
import { ForecastCardType } from './constants'

interface ForecastListProps {
  forecastList: Day[]
}

const ForecastList: FC<ForecastListProps> = ({ forecastList }) => {
  return (
    <ul className={styles.list}>
      {forecastList.map((item) => (
        <li key={item.datetime}>
          <ForecastCard
            date={item.datetime}
            iconSrc={`@app/assets/${item.icon}.svg`}
            iconName={item.icon}
            degree={`${item.temp}/${item.feelslike}`}
            type={ForecastCardType.SMALL}
          />
        </li>
      ))}
    </ul>
  )
}

export default ForecastList
