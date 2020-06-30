import React from 'react';
import Kramer from '../OleynikovAP/components/Kramer/Kramer';
import ExpApp from './ExpApp/ExpApp';
import Metronome from './Metronome/Metronome';

const TEXT_STYLE = {
  fontSize: '16px',
  color: 'black',
  margin: '10px 0px',
};

const STYLE = {
  borderRadius: '10px',
  background: 'white',
  margin: '10px',
  padding: '5px 25px',
  minWidth: '800px',
};

const App = () => (
  <div style={STYLE}>
    <h2 style={TEXT_STYLE}>Собственный элемент - возведение в степень</h2>
    <ExpApp />
    <h2 style={TEXT_STYLE}>Элемент от другого студента (Олейников А.П.)</h2>
    <Kramer />
    <h2 style={TEXT_STYLE}>Заимствованный элемент - Метроном</h2>
    <Metronome />
  </div>
);

export default App;
