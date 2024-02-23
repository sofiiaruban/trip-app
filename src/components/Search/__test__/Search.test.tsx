import { render } from '@testing-library/react'
import Search from '../Search'

test('Search matches snapshot', () => {
  const onSearchMock = jest.fn()
  const commonProps = {
    placeholder: 'Search',
    onSearch: onSearchMock
  }

  const { container } = render(<Search {...commonProps} />)

  expect(container).toMatchSnapshot()
})
