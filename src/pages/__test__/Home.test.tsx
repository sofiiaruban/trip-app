import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Home from '../Home'
import { Provider } from 'react-redux'
import { store } from '@app/store/store'

jest.mock('@reduxjs/toolkit/query/react', () => ({
  ...jest.requireActual('@reduxjs/toolkit/query/react'),
  fetchBaseQuery: jest.fn()
}))

test('Renders the main page', () => {
  const { container } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  )
  expect(container).toMatchSnapshot()
})
