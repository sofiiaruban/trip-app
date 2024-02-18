import { FC } from 'react'
import { MAIN_PAGE_TEST_ID } from './constants'
import Search from '@app/components/Search/Search'

const Home: FC = () => {
  const onSearch: (value: string) => void = (value) => {
    console.log('Пошук за значенням:', value)
  }
  return (
    <div data-testid={MAIN_PAGE_TEST_ID}>
      <Search placeholder="Search your trip" onSearch={onSearch} />
    </div>
  )
}

export default Home
