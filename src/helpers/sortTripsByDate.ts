import { Trip } from '@app/types/types'

const isDate = (date: Date): date is Date => {
  return (
    Object.prototype.toString.call(date) === '[object Date]' &&
    !isNaN(date.getTime())
  )
}

const sortTripsByStartDate = (trips: Trip[]): Trip[] => {
  const sortedTrips = [...trips]
  return sortedTrips.sort((a, b) => {
    if (isDate(a.startDate) && isDate(b.startDate)) {
      return a.startDate.getTime() - b.startDate.getTime()
    } else {
      return 0
    }
  })
}

export default sortTripsByStartDate
