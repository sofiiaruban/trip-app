import { Trip } from '@app/types/types'

const filterTripsByCityName = (trips: Trip[], cityName: string): Trip[] => {
  return trips.filter((trip) =>
    trip.cityName.toLowerCase().includes(cityName.toLowerCase())
  )
}

export default filterTripsByCityName
