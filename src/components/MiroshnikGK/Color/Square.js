import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

const square = (props) => {
  const { CMYK } = props;
  const { value } = props;
  const h4style = {
    height: '25px',
  };
  const rectKeyframes = Radium.keyframes({
    '0%': { transform: 'rotate(-3deg)' },
    '100%': { transform: 'rotate(3deg)' },
  });
  const rectanglestyle = {
    width: '300px',
    height: '300px',
    background: value,
    marginTop: '30px',
    border: '5px solid white',
    animation: '2s infinite alternate ease-in-out',
    animationName: rectKeyframes,
  };
  return (
    <div className="SquareGK">
      <div className="rectangleGK" style={rectanglestyle} />
      <h4 style={h4style}>
        CMYK:
        <br />
        {CMYK}
      </h4>
    </div>
  );
};

square.propTypes = {
  CMYK: PropTypes.string,
  value: PropTypes.string,
};

square.defaultProps = {
  CMYK: '',
  value: '',
};

export default Radium(square);
