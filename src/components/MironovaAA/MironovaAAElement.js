import React from 'react';
import Nekotube from './nekotube/nekotube';
import AvatarGenerator from './react-avatar-generator/index';

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
      <p style={TEXT_STYLE}>Компонент из GitHub</p>
      <AvatarGenerator />
    </div>
  );
};

export default MironovaAAElement;
