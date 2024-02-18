import { FC } from 'react'
import Root from './Root'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import { AppRoutes } from './AppRoutes'

const App: FC = () => {
  return (
    <Root>
      <Routes>
        <Route path={AppRoutes.HOME} element={<Home />} />
      </Routes>
    </Root>
  )
}

export default App
