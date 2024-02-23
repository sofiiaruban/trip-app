import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import ButtonLink from '../ButtonLink'

test('ButtonLink component matches snapshot', () => {
  const commonProps = {
    url: '/',
    title: 'Button Link'
  }

  const { container } = render(
    <Router>
      <ButtonLink {...commonProps} />
    </Router>
  )

  expect(container).toMatchSnapshot()
})
