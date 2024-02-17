import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Main from '../Main'

test('demo', () => {
  expect(true).toBe(true)
})

test('Renders the main page', () => {
  render(<Main />)
  expect(true).toBeTruthy()
})
