import { FC } from 'react'
import './App.css'
import Root from './Root'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import { AppRoutes } from './AppRoutes'

const App: FC = () => {
  return (
    <Root>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<Main />} />
      </Routes>
    </Root>
  )
}

export default App
