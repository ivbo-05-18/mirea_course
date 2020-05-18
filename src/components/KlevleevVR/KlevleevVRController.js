import React, { useState } from "react";
import KlevleevVRElement from "./KlevleevVRElement.js";

const KLEVLEEV_VR_STYLE = {
  width: "70%",
};

const KlevleevVRController = () => {
  const [showState, switchState] = useState({
    show: false,
  });

  const switchShowState = () => {
    switchState({
      show: !showState.show,
    });
  };

  return (
      <div className="klevleev_vr" style={KLEVLEEV_VR_STYLE}>
        <button onClick={switchShowState}> Клевлеев В.Р. </button>
        {showState.show && <KlevleevVRElement />}
      </div>
  );
};

export default KlevleevVRController;
