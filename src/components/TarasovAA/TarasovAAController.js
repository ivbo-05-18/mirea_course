import React, { useState } from 'react';
import TarasovAAElement from './TarasovAAElement';

const TarasovAAController = () => {
  const [showState, switchState] = useState({
    show: false,
  });

  const switchShowState = () => {
    switchState({
      show: !showState.show,
    });
  };

  return (
    <div className="tarasov_aa">
      <button onClick={switchShowState} type="submit"> Тарасов А.А. </button>
      {showState.show && <TarasovAAElement />}
    </div>
  );
};

export default TarasovAAController;
