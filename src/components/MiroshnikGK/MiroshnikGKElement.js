import React from 'react';
import Color from './Color';
import WithMoveValidation from './integrations/WithMoveValidation';


const MiroshnikGKElement = () => {
  const TEXT_STYLE = {
    'font-size': '25px',
    color: 'white',
    margin: '10px 0px',
  };

  const boardsContainer = {
    marginTop: '70px',
  };

  return (
    <div className="miroshnik_gk_element">
      <p style={TEXT_STYLE}>Собственный компонент</p>
      <Color />
      <div style={boardsContainer}>
        <p style={TEXT_STYLE}>Заимствованный компонент</p>
        <WithMoveValidation />
      </div>
    </div>
  );
};
export default MiroshnikGKElement;
