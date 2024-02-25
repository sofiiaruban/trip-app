import { WeatherData } from '@app/types/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY
const PARAMS = `unitGroup=us&include=days&key=${API_KEY}&contentType=json`

interface WeatherDateRangeParams {
  cityName: string
  fromDate: string
  toDate: string
}

export const weatherDataApi = createApi({
  reducerPath: 'weatherDataApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getWeatherDateRange: builder.query<WeatherData, WeatherDateRangeParams>({
      query: ({ cityName, fromDate, toDate }) =>
        `${cityName}/${fromDate}/${toDate}?${PARAMS}`
    }),
    getWeatherToday: builder.query<WeatherData, string>({
      query: (cityName) => `${cityName}/today?${PARAMS}`
    })
  })
})

export const { useGetWeatherDateRangeQuery, useGetWeatherTodayQuery } =
  weatherDataApi
