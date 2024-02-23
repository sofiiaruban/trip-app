import { CityImg, CityList } from './constants'
import { Trip } from './types/types'

const initialTrips: Trip[] = [
  {
    cityImgSrc: CityImg.NEW_YORK,
    cityName: CityList.NEW_YORK,
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-03-05')
  },
  {
    cityImgSrc: CityImg.LONDON,
    cityName: CityList.LONDON,
    startDate: new Date('2024-04-10'),
    endDate: new Date('2024-04-15')
  },
  {
    cityImgSrc: CityImg.LONDON,
    cityName: CityList.LONDON,
    startDate: new Date('2024-04-23'),
    endDate: new Date('2024-04-29')
  },
  {
    cityImgSrc: CityImg.KYIV,
    cityName: CityList.KYIV,
    startDate: new Date('2024-05-20'),
    endDate: new Date('2024-05-25')
  }
]

export default initialTrips
