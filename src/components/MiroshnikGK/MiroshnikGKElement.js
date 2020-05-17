import React from 'react';
import Color from './Color';


const MiroshnikGKElement = () => {
  const TEXT_STYLE = {
    'font-size': '25px',
    color: 'white',
    margin: '10px 0px',
  };

  return (
    <div className="miroshnik_gk_element">
      <p style={TEXT_STYLE}>Собственный компонент</p>
      <Color />
    </div>
  );
};
export default MiroshnikGKElement;
