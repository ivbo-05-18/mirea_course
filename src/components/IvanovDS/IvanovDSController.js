import React, { useState } from 'react';
import IvanovDSElement from './IvanovDSElement';

const IvanovDSController = () => {
  const [showState, switchState] = useState({
    show: false,
  });

  const switchShowState = () => {
    switchState({
      show: !showState.show,
    });
  };

  return (
    <div className="ivanov_ds">
      <button id="IDS" onClick={switchShowState} type="submit"> Иванов Д.С. </button>
      {showState.show && <IvanovDSElement />}
    </div>
  );
};

export default IvanovDSController;
