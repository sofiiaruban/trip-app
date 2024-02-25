import { FC, Suspense, lazy, useEffect, useState } from 'react'
import { MAIN_PAGE_TEST_ID } from './constants'
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
import { ForecastCardType } from '@app/components/ForecastList/constants'
import CountdownComponent from '@app/components/Countdown/Countdown'

const Search = lazy(() => import('@app/components/Search/Search'))
const TripsList = lazy(() => import('@app/components/TripsList/TripsList'))
const ForecastList = lazy(
  () => import('@app/components/ForecastList/ForecastList')
)
const ForecastCard = lazy(
  () => import('@app/components/ForecastList/ForecastCard/ForecastCard')
)

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
        <Suspense fallback={<div>Loading Search...</div>}>
          <Search placeholder="Search your trip" onSearch={onSearch} />
        </Suspense>
        <Suspense fallback={<div>Loading TripsList...</div>}>
          <TripsList
            trips={filteredTrips}
            activeIndex={activeIndex}
            setActive={setActive}
          />
        </Suspense>
        <p className={styles.title}>Week</p>
        <Suspense fallback={<div>Loading ForecastList...</div>}>
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            <ForecastList forecastList={data?.days} />
          ) : null}
        </Suspense>
      </main>
      <aside className={styles.aside}>
        <Suspense fallback={<div>Loading ForecastCard...</div>}>
          {isError ? (
            <>Oh no, there was an error</>
          ) : isLoader ? (
            <>Loading...</>
          ) : dailyWeather ? (
            <ForecastCard
              date={dailyWeather.days[0].datetime}
              iconSrc={`trip-app/src/assets/${dailyWeather.days[0].icon}.svg`}
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
        </Suspense>
      </aside>
    </div>
  )
}

export default Home
