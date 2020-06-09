import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import WeatherInfo from './WeatherInfo';

configure({ adapter: new Adapter() });


describe('indirectly testing click simulation', () => {
  it('should ', () => {
    const wrapper = shallow(<WeatherInfo />);
    expect(wrapper.state('weatherData')).toBe(null);
  });
});
