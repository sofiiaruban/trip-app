import { FC } from 'react'
import { MAIN_PAGE_TEST_ID } from './constants'

const Home: FC = () => {
  return <div data-testid={MAIN_PAGE_TEST_ID}>Main</div>
}

export default Home
