import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Main from '../Main'

test('Renders the main page', () => {
  const { container } = render(<Main />)
  expect(container).toMatchSnapshot()
})
