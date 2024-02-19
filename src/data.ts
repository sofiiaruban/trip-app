import { Trip } from './types'

const trips: Trip[] = [
  {
    cityImgSrc:
      'https://github.com/sofiiaruban/delivery-app/assets/37212452/d5c5a07f-e0e3-4731-aec2-905b550f0137',
    cityName: 'New York',
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-03-05')
  },
  {
    cityImgSrc:
      'https://github.com/sofiiaruban/delivery-app/assets/37212452/6ddc7f4c-8b48-4146-890f-fc5124892c7a',
    cityName: 'London',
    startDate: new Date('2024-04-10'),
    endDate: new Date('2024-04-15')
  },
  {
    cityImgSrc:
      'https://github.com/sofiiaruban/delivery-app/assets/37212452/22af8aca-39f2-481a-b092-84921b709f2a',
    cityName: 'Kyiv',
    startDate: new Date('2024-05-20'),
    endDate: new Date('2024-05-25')
  }
]

export default trips
