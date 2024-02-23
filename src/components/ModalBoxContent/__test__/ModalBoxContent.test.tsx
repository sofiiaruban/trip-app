import { render } from '@testing-library/react'
import ModalBoxContent from '../ModalBoxContent'
import { store } from '@app/store/store'
import { Provider } from 'react-redux'

jest.mock('@reduxjs/toolkit/query/react', () => ({
  ...jest.requireActual('@reduxjs/toolkit/query/react'),
  fetchBaseQuery: jest.fn()
}))

test('ModalBoxContent matches snapshot', () => {
  const closeModalMock = jest.fn()
  const { container } = render(
    <Provider store={store}>
      <ModalBoxContent closeModal={closeModalMock} />
    </Provider>
  )

  expect(container).toMatchSnapshot()
})
