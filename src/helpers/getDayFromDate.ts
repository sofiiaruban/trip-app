import moment from 'moment'

function getDayFromDate(date: string): string {
  return moment(date).format('dddd')
}

export default getDayFromDate
