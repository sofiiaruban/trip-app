import moment from 'moment'

const getYearMonthDayDate = (date: string | Date) => {
  return moment(date).format('YYYY-MM-DD')
}

export default getYearMonthDayDate
