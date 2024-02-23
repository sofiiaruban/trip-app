import { render } from '@testing-library/react'
import Button from '../Button'

test('Button component matches snapshot', () => {
  const { container } = render(<Button title="Click me" />)

  expect(container).toMatchSnapshot()
})
