import React from 'react';
import Nekotube from './nekotube/nekotube';

const MironovaAAElement = () => {
  const TEXT_STYLE = {
    'font-size': '25px',
    color: 'white',
    margin: '10px 0px',
  };

  return (
    <div className="mironova_aa_element">
      <p style={TEXT_STYLE}>Собственный компонент</p>
      <Nekotube />
    </div>
  );
};

export default MironovaAAElement;
