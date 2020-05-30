import React from 'react';
import renderer from 'react-test-renderer';
import Jokes from './Jokes';

describe('Тестирование рендринга', () => {
  test('renders correctly', () => {
    const renderedApp = renderer.create(<Jokes />);
    expect(renderedApp.toJSON()).toMatchSnapshot();
  });
});
