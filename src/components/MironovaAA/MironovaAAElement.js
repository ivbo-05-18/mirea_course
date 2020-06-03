import React from 'react';
import AvatarGenerator from 'react-avatar-generator';
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
      <p style={TEXT_STYLE}>Компонент из GitHub</p>
      <AvatarGenerator
        colors={['#333', '#222', '#ccc']}
        backgroundColor="#000"
      />
    </div>
  );
};

export default MironovaAAElement;
