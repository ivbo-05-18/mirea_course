import React from "react";
import GuessTheSong from "./GuessTheSong";
import ColorFood from "./ColorFood/ColorFood";

const KlevleevVRElement = () => {
  const TEXT_STYLE = {
    fontSize: "25px",
    color: "white",
    margin: "10px 0px",
    width: "100%",
  };

  const ELEMENT_STYLE = {
    display: "flex",
    flexDirection: "column",
  };

  const COMPONENT_STYLE = {
    marginBottom: "100px",
  };
  return (
    <div className="klevleev_vr_element" style={ELEMENT_STYLE}>
      <div style={COMPONENT_STYLE}>
        <p style={TEXT_STYLE}>Собственный компонент</p>
        <GuessTheSong />
      </div>

      <div style={COMPONENT_STYLE}>
        <p style={TEXT_STYLE}>
          Игра из <a href="https://github.com/chuckha/ColorFlood">GitHub</a>
        </p>
        <ColorFood width="5" height="5" />
      </div>
    </div>
  );
};

export default KlevleevVRElement;
