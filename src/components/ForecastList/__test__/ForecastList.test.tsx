import { render } from '@testing-library/react'
import ForecastList from '../ForecastList'
import { Day } from '@app/types/types';

const mockForecastList : Day[] = [
  {
    datetime: '2024-02-18',
    datetimeEpoch: 1645119600,
    tempmax: 30,
    tempmin: 20,
    temp: 25,
    feelslikemax: 28,
    feelslikemin: 18,
    feelslike: 22,
    dew: 10,
    humidity: 70,
    precip: 0,
    precipprob: 0,
    precipcover: 0,
    preciptype: ['none'],
    snow: 0,
    snowdepth: 0,
    windgust: 15,
    windspeed: 10,
    winddir: 180,
    pressure: 1015,
    cloudcover: 20,
    visibility: 10,
    solarradiation: 500,
    solarenergy: 2000,
    uvindex: 5,
    severerisk: 0,
    sunrise: '06:00',
    sunriseEpoch: 1645090800,
    sunset: '18:00',
    sunsetEpoch: 1645134000,
    moonphase: 0.5,
    conditions: 'Clear',
    description: 'Clear skies',
    icon: 'clear',
    stations: null,
    source: 'mock-source',
  },
];

test('ForecastList matches snapshot', () => {
  const { container } = render(<ForecastList forecastList={mockForecastList} />)

  expect(container).toMatchSnapshot()
})
