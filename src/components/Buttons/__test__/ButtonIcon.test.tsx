import { render } from '@testing-library/react'
import ButtonIcon from '../ButtonIcon'

test('ButtonIcon component matches snapshot', () => {
  const child = <div>"ButtonIcon"</div>

  const { container } = render(<ButtonIcon>{child}</ButtonIcon>)

  expect(container).toMatchSnapshot()
})
