import React, { useState } from 'react';
import BekinaMPElement from './BekinaMPElement';

const BekinaMPController = () => {
  const [showState, switchState] = useState({
    show: false,
  });

  const switchShowState = () => {
    switchState({
      show: !showState.show,
    });
  };

  return (
    <div className="bekina_mp">
      <button type="button" onClick={switchShowState}> Бекина М.П. </button>
      {showState.show && <BekinaMPElement />}
    </div>
  );
};

export default BekinaMPController;
