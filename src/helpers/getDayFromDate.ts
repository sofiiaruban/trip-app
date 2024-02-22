import moment from 'moment'

const getDayFromDate = (date: string): string => {
  return moment(date).format('dddd')
}

export default getDayFromDate
