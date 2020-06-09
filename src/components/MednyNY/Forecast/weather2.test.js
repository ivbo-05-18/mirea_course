import React from 'react';
import { create } from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import WeatherInfo from './WeatherInfo';

configure({ adapter: new Adapter() });

const testData = {
  data: {
    base: 'stations',
    clouds: { all: 90 },

    cod: 200,
    coord:
    {
      lat: 55.75,
      lon: 37.62,
    },
    dt: 1591188032,
    id: 524901,
    main:
    {
      feels_like: 53.17,
      humidity: 100,
      pressure: 1009,
      temp: 57.2,
      temp_max: 59,
      temp_min: 55.4,
    },
    name: 'Moscow',
    sys:
    {
      country: 'RU',
      id: 9029,
      sunrise: 1591145467,
      sunset: 1591207478,
      type: 1,
    },

    timezone: 10800,
    visibility: 10000,
    weather:
    {
      0: {
        description: 'light rain',
        icon: '10d',
        id: 500,
        main: 'Rain',
      },
      length: 1,
    },

    wind:
{
  deg: 90,
  speed: 11.18,
},
  },
};

describe('Snapshot test', () => {
  it('Matches the snapshot', () => {
    const weatherInfo = create(<WeatherInfo weatherData={testData.data.runs} isLoading={false} />);
    expect(weatherInfo.toJSON()).toMatchSnapshot();
  });
});
