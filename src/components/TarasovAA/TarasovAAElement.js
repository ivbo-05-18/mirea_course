import React from 'react';
import ForeignGreetings from './Greetings/ForeignGreetings';
import Clock from './Clock/Clock';
import Color from './Color/Color';


const TarasovAAElement = () => {
  const TEXT_STYLE = {
    'font-size': '25px',
    color: 'white',
    margin: '10px 0px',
  };

  return (
    <div className="tarasov_aa_element">
      <p style={TEXT_STYLE}>Собственный компонент</p>
      <ForeignGreetings />

      <p style={TEXT_STYLE}>Заимствованный компонент с github</p>
      <Clock />

      <p style={TEXT_STYLE}>Заимствованный компонент у Мирошника Г.К.</p>
      <Color />
    </div>
  );
};

export default TarasovAAElement;
