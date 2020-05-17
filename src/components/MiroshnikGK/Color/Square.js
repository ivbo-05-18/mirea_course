import React from 'react';
import Radium from 'radium'

const square = (props) => {

  const h4style = {
    height: "25px",
  }

  const rectKeyframes = Radium.keyframes({
    '0%': { transform: 'rotate(-3deg)' },
    '100%': { transform: 'rotate(3deg)' },
  });

  const rectanglestyle = {
    width: "300px",
    height: "300px",
    background: props.value,
    marginTop: "30px",
    border: "5px solid white",
    borderStyle: "double",
    animation: "anime1 2s infinite alternate ease-in-out",
    animationName: rectKeyframes,
  };

  return (
    <div className="SquareGK">
      <div className="rectangleGK" style={rectanglestyle}>
      </div>
      <h4 style={h4style}>CMYK: <br /> {props.CMYK}</h4>
    </div >
  );
}
export default Radium(square);
