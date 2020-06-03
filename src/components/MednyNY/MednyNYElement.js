import React from 'react';
import Forecast from './Forecast/weather';
import Calculator from './Calculator/index';


const STYLE = {
  'border-radius': '2px',
  background: '#DFDFDF',
  margin: '10px',
  padding: '5px 25px',
};

const TEXT_STYLE = {
  'font-size': '16px',
  color: 'black',
  margin: '10px 0px',
};

const MednyNYElement = () => (
  <div style={STYLE}>
    <h2 style={TEXT_STYLE}>Собственный элемент - погода</h2>
    <div>
      <Forecast />
    </div>
    <h2 style={TEXT_STYLE}>Заимствованный элемент</h2>
    <div>
      <Calculator />
    </div>
  </div>
);

export default MednyNYElement;
