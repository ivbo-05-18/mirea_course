import React from "react";
import GuessTheSong from "./GuessTheSong";

const KlevleevVRElement = () => {
  const TEXT_STYLE = {
    fontSize: "25px",
    color: "white",
    margin: "10px 0px",
    width: "100%",
  };

  return (
    <div className="klevleev_vr_element">
      <p style={TEXT_STYLE}>Собственный компонент</p>
      <GuessTheSong />
    </div>
  );
};

export default KlevleevVRElement;
