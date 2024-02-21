import { FC } from 'react'
import { MAIN_PAGE_TEST_ID } from './constants'
import Search from '@app/components/Search/Search'
import TripsList from '@app/components/TripsList/TripsList'
import styles from './Home.module.css'
//import { useGetWeatherDataByNameQuery } from '@app/services/weatherDataApi'
import initialTrips from '@app/initialTrips'
//import { useSelector } from 'react-redux'
//import { RootState } from '@app/store/store'
//import { useGetWeatherDateRangeQuery } from '@app/services/weatherDataApi'

const Home: FC = () => {
  const onSearch: (value: string) => void = (value) => {
    console.log('Пошук за значенням:', value)
  }
  //const selectTrips = (state: RootState) => state.trips
  //const data = useSelector(selectTrips)
  //useGetWeatherDateRangeQuery, useGetWeatherTodayQuery
  //const { data, error, isLoading } = useGetWeatherDateRangeQuery({
  //  cityName: 'kyiv',
  //  fromDate: '2024-02-22',
  //  toDate: '2024-03-10'
  //})

  return (
    <main data-testid={MAIN_PAGE_TEST_ID} className={styles.home}>
      <Search placeholder="Search your trip" onSearch={onSearch} />
      <TripsList trips={initialTrips} />
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
