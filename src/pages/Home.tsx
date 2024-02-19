import { FC } from 'react'
import { MAIN_PAGE_TEST_ID } from './constants'
import Search from '@app/components/Search/Search'
import TripsList from '@app/components/TripsList/TripsList'
import trips from '@app/data'
import styles from './Home.module.css'

const Home: FC = () => {
  const onSearch: (value: string) => void = (value) => {
    console.log('Пошук за значенням:', value)
  }
  return (
    <main data-testid={MAIN_PAGE_TEST_ID} className={styles.home}>
      <Search placeholder="Search your trip" onSearch={onSearch} />
      <TripsList trips={trips} />
    </main>
  )
}

export default Home
