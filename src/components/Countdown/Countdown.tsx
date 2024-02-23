import Countdown from 'react-countdown'
import { CountdownProps } from './constants'
import styles from './Countdown.module.css'

interface CountdownRendererProps {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownComponent = ({ date }: { date: Date }) => {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds
  }: CountdownRendererProps) => {
    const countdownValues: Record<CountdownProps, number> = {
      [CountdownProps.DAYS]: days,
      [CountdownProps.HOURS]: hours,
      [CountdownProps.MINUTES]: minutes,
      [CountdownProps.SECONDS]: seconds
    }

    return (
      <ul className={styles.countdown}>
        {Object.values(CountdownProps).map((unit) => (
          <div key={unit} className={styles.valueContainer}>
            <p className={styles.unitValue}>{countdownValues[unit]}</p>
            <p className={styles.unit}>{unit}</p>
          </div>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <Countdown date={date} renderer={renderer} />
    </div>
  )
}

export default CountdownComponent
