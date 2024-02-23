import { FC, useEffect, useState } from 'react'
import { MAIN_PAGE_TEST_ID } from './constants'
import Search from '@app/components/Search/Search'
import TripsList from '@app/components/TripsList/TripsList'
import styles from './Home.module.css'
//import { useGetWeatherDataByNameQuery } from '@app/services/weatherDataApi'
import initialTrips from '@app/initialTrips'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store/store'
import filterTripsByCityName from '@app/helpers/filterTripsByCityName'
import sortTripsByStartDate from '@app/helpers/sortTripsByDate'
//import sortTripsByStartDate from '@app/helpers/sortTripsByDate'
//import { useGetWeatherDateRangeQuery } from '@app/services/weatherDataApi'

const Home: FC = () => {
  const selectTrips = (state: RootState) => state.trips
  const trips = useSelector(selectTrips)
  const [filteredTrips, setFilteredTrips] = useState(trips)

  useEffect(() => {
    setFilteredTrips(trips)
  }, [trips])

  const onSearch: (value: string) => void = (value) => {
    const filteredList = filterTripsByCityName(trips, value)
    const sortedList = sortTripsByStartDate(filteredList)
    setFilteredTrips(sortedList)
  }
  console.log(trips)
  console.log(initialTrips)
  //const sorted = sortTripsByStartDate(initialTrips)
  //useGetWeatherDateRangeQuery, useGetWeatherTodayQuery
  //const { data, error, isLoading } = useGetWeatherDateRangeQuery({
  //  cityName: 'kyiv',
  //  fromDate: '2024-02-22',
  //  toDate: '2024-03-10'
  //})

  return (
    <main data-testid={MAIN_PAGE_TEST_ID} className={styles.home}>
      <Search placeholder="Search your trip" onSearch={onSearch} />
      <TripsList trips={filteredTrips} />
    </main>
  )
}

export default Home
//{error ? (
//  <>Oh no, there was an error</>
//) : isLoading ? (
//  <>Loading...</>
//) : data ? (
//  <>{JSON.stringify(data)}</>
//) : null}
