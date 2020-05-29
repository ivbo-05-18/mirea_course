import React from 'react';
import ReactDOM from 'react-dom';
import DiceRoller from './DiceRoller';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DiceRoller />, div);
  ReactDOM.unmountComponentAtNode(div);
});
