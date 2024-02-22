import { Trip } from '@app/types/types'

const sortTripsByStartDate = (trips: Trip[]): Trip[] => {
  return trips
    .slice()
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
}

export default sortTripsByStartDate
