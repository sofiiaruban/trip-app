import '@testing-library/jest-dom'
import { act, render, waitFor } from '@testing-library/react'
import Home from '../Home'
import { Provider } from 'react-redux'
import { store } from '@app/store/store'

jest.mock('@reduxjs/toolkit/query/react', () => ({
  ...jest.requireActual('@reduxjs/toolkit/query/react'),
  fetchBaseQuery: jest.fn()
}))

test('Renders the main page', async () => {
  await act(async () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    )

    await waitFor(() => {
      expect(container).toMatchSnapshot()
    })
  })
})
