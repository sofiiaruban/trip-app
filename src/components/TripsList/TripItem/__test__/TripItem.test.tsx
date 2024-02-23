import { render } from '@testing-library/react'
import TripItem from '../TripItem'

test('TripItem matches snapshot', () => {
  const setIsActiveMock = jest.fn()
  const commonProps = {
    setIsActive: setIsActiveMock,
    cityImgSrc: '/src',
    cityName: 'KYIV',
    startDate: new Date('24-10-01'),
    endDate: new Date('24-10-03')
  }

  const { container } = render(<TripItem {...commonProps} />)

  expect(container).toMatchSnapshot()
})
