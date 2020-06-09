import React, { useState } from 'react';
import MironovaAAElement from './MironovaAAElement';

const MironovaAAController = () => {
  const [showState, switchState] = useState({
    show: false,
  });

  const switchShowState = () => {
    switchState({
      show: !showState.show,
    });
  };

  return (
    <div className="mironova_aa">
      <button onClick={switchShowState} type="submit"> Миронова А.А. </button>
      {showState.show && <MironovaAAElement />}
    </div>
  );
};

export default MironovaAAController;
