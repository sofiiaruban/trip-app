export interface WeatherForecastItemProps {
  date: string
  iconSrc: string
  iconName: string
  degree: string
}

interface HourlyWeather {
  datetime: string
  datetimeEpoch: number
  temp: number
  feelslike: number
  humidity: number
  dew: number
  precip: number
  precipprob: number
  snow: number
  snowdepth: number
  preciptype: string | null
  windgust: number
  windspeed: number
  winddir: number
  pressure: number
  visibility: number
  cloudcover: number
  solarradiation: number
  solarenergy: number
  uvindex: number
  severerisk: number
  conditions: string
  icon: string
  stations: string[] | null
  source: string
}

export interface DailyWeather extends HourlyWeather {
  sunrise: string
  sunriseEpoch: number
  sunset: string
  sunsetEpoch: number
  moonphase: number
  description: string
}
