import { FC, useEffect, useState } from 'react'
import { MAIN_PAGE_TEST_ID } from './constants'
import Search from '@app/components/Search/Search'
import TripsList from '@app/components/TripsList/TripsList'
import styles from './Home.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'
import filterTripsByCityName from '@app/helpers/filterTripsByCityName'
import sortTripsByStartDate from '@app/helpers/sortTripsByDate'
import useActiveIndex from '@app/components/TripsList/useActiveIndex'
import {
  useGetWeatherDateRangeQuery,
  useGetWeatherTodayQuery
} from '@app/services/weatherDataApi'
import getYearMonthDayDate from '@app/helpers/getYearMonthDayDate'
import ForecastList from '@app/components/ForecastList/ForecastList'
import ForecastCard from '@app/components/ForecastList/ForecastCard/ForecastCard'
import { ForecastCardType } from '@app/components/ForecastList/constants'
import CountdownComponent from '@app/components/Countdown/Countdown'

const Home: FC = () => {
  const selectTrips = (state: RootState) => state.trips
  const trips = useSelector(selectTrips)
  const [filteredTrips, setFilteredTrips] = useState(trips)
  const { activeIndex, setActive } = useActiveIndex()

  useEffect(() => {
    setFilteredTrips(trips)
  }, [trips])

  const onSearch: (value: string) => void = (value) => {
    const filteredList = filterTripsByCityName(trips, value)
    const sortedList = sortTripsByStartDate(filteredList)
    setFilteredTrips(sortedList)
  }

  const { data, error, isLoading } = useGetWeatherDateRangeQuery({
    cityName: filteredTrips[activeIndex].cityName,
    fromDate: getYearMonthDayDate(filteredTrips[activeIndex].startDate),
    toDate: getYearMonthDayDate(filteredTrips[activeIndex].endDate)
  })

  const {
    data: dailyWeather,
    error: isError,
    isLoading: isLoader
  } = useGetWeatherTodayQuery(filteredTrips[activeIndex].cityName)

  return (
    <div className={styles.container}>
      <main data-testid={MAIN_PAGE_TEST_ID} className={styles.home}>
        <p className={styles.mainTitle}>
          Weather <b>Forecast</b>
        </p>
        <Search placeholder="Search your trip" onSearch={onSearch} />
        <TripsList
          trips={filteredTrips}
          activeIndex={activeIndex}
          setActive={setActive}
        />
        <p className={styles.title}>Week</p>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <ForecastList forecastList={data?.days} />
        ) : null}
      </main>
      <aside className={styles.aside}>
        {isError ? (
          <>Oh no, there was an error</>
        ) : isLoader ? (
          <>Loading...</>
        ) : dailyWeather ? (
          <ForecastCard
            date={dailyWeather.days[0].datetime}
            iconSrc={`src/assets/${dailyWeather.days[0].icon}.svg`}
            iconName={dailyWeather.days[0].icon}
            degree={`${dailyWeather.days[0].temp}`}
            type={ForecastCardType.BIG}
          >
            <p className={styles.cityTitle}>{dailyWeather.address}</p>
            <CountdownComponent
              date={new Date(filteredTrips[activeIndex].startDate)}
            />
          </ForecastCard>
        ) : null}
      </aside>
    </div>
  )
}

export default Home
