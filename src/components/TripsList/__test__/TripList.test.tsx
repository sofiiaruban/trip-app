import { render } from '@testing-library/react'
import TripsList from '../TripsList'

test('TripsList matches snapshot', () => {
  const setIsActiveMock = jest.fn()
  const commonProps = {
    trips: [
      {
        setIsActive: setIsActiveMock,
        cityImgSrc: '/src',
        cityName: 'KYIV',
        startDate: new Date('24-10-01'),
        endDate: new Date('24-10-03')
      }
    ],
    activeIndex: 0,
    setActive: setIsActiveMock
  }

  const { container } = render(<TripsList {...commonProps} />)

  expect(container).toMatchSnapshot()
})
