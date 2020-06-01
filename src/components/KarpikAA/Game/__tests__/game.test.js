import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Game from '../game';

configure({ adapter: new Adapter() });

describe('Render Game', () => {
  it('Render correctly', () => {
    const GameComponent = renderer.create(<Game />).toJSON();
    expect(GameComponent).toMatchSnapshot();
  });

  it('Should have zero states in the start', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.state('index')).toEqual(0);
    expect(wrapper.state('round')).toEqual(0);
    expect(wrapper.state('text')).toHaveLength(0);
    expect(wrapper.state('steps')).toHaveLength(0);
  });

  it('Should push steps after click', () => {
    const wrapper = shallow(<Game />);
    wrapper.find('#start').simulate('click');
    expect(wrapper.state('round')).toEqual(1);
    expect(wrapper.state('steps')).toHaveLength(1);
  });

  it('PlayStep should be called ones', () => {
    const playStep = jest.fn();
    setTimeout((playStep(2)), 300);
    expect(playStep).toHaveBeenCalledTimes(1);
  });

  it('Should play sound of red button with the click', () => {
    const app = shallow(<Game />);
    const playSoundSpy = jest.spyOn(app.instance(), 'playSound');
    app.update();
    app.instance().forceUpdate();
    const button = app.find('#red');
    button.simulate('click');
    expect(playSoundSpy).toHaveBeenCalled();
  });

  it('Should play sound of green button with the click', () => {
    const app = shallow(<Game />);
    const playSoundSpy = jest.spyOn(app.instance(), 'playSound');
    app.update();
    app.instance().forceUpdate();
    const button = app.find('#green');
    button.simulate('click');
    expect(playSoundSpy).toHaveBeenCalled();
  });

  it('Should play sound of yellow button with the click', () => {
    const app = shallow(<Game />);
    const playSoundSpy = jest.spyOn(app.instance(), 'playSound');
    app.update();
    app.instance().forceUpdate();
    const button = app.find('#yellow');
    button.simulate('click');
    expect(playSoundSpy).toHaveBeenCalled();
  });

  it('Should play sound of blue button with the click', () => {
    const app = shallow(<Game />);
    const playSoundSpy = jest.spyOn(app.instance(), 'playSound');
    app.update();
    app.instance().forceUpdate();
    const button = app.find('#blue');
    button.simulate('click');
    expect(playSoundSpy).toHaveBeenCalled();
  });

  it('Testing reset game', () => {
    const wrapper = shallow(<Game />);
    wrapper.find('#start').simulate('click');
    expect(wrapper.state('round')).toEqual(1);
    expect(wrapper.state('index')).toEqual(0);
    expect(wrapper.state('steps')).toHaveLength(1);

    wrapper.find('#start').simulate('click');
    expect(wrapper.state('round')).toEqual(1);
    expect(wrapper.state('index')).toEqual(0);
    expect(wrapper.state('steps')).toHaveLength(1);
  });

  it('Should call resetSimon after click on Start button', () => {
    const app = shallow(<Game />);
    const resetSimonSpy = jest.spyOn(app.instance(), 'resetSimon');
    app.update();
    app.instance().forceUpdate();
    const button = app.find('#start');
    button.simulate('click');
    expect(resetSimonSpy).toHaveBeenCalled();
  });
});
