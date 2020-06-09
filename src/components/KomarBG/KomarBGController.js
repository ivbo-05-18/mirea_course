import React, { useState } from 'react';
import KomarBGElement from './KomarBGElement';

export default function KomarBGController() {
  const [showState, switchState] = useState({
    show: false,
  });

  const switchShowState = () => {
    switchState({
      show: !showState.show,
    });
  };

  return (
    <div className="komar-bg">
      <button onClick={switchShowState} type="submit"> Комар Б.Г. </button>
      {showState.show && <KomarBGElement />}
    </div>
  );
}
