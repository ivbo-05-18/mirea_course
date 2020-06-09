import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Forecast from './weather';

configure({ adapter: new Adapter() });
describe('work correctly', () => {
  it('match snapshout', () => {
    const WeatherComponent = renderer.create(<Forecast />).toJSON();
    expect(WeatherComponent).toMatchSnapshot();
  });

  it('Should find buttons', () => {
    const wrapper = shallow(<Forecast />);
    const container = wrapper.find('button');
    expect(container.length).toEqual(2);
  });
});
