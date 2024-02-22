import moment from 'moment'

const getYearMonthDayDate = (date: string): string => {
  return moment(date).format('YYYY-MM-DD')
}

export default getYearMonthDayDate
