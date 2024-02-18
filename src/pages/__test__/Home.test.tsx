import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Home from '../Home'

test('Renders the main page', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
