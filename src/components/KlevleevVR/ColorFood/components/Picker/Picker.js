/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';
import './Picker.css';

const Picker = ({
  color, colorIndex, clickHandler, incrementCount,
}) => {
  const className = `${color} picker`;
  return (
    <div
      className={className}
      role="button"
      tabIndex="0"
      onClick={() => {
        incrementCount();
        clickHandler(colorIndex);
      }}
      onKeyDown={() => {
        incrementCount();
        clickHandler(colorIndex);
      }}
    />
  );
};

export default Picker;
