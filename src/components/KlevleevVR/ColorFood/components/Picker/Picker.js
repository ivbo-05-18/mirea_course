/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';
// import './Picker.css';
// import styles from './Picker.module.css'
import classes from './Picker.module.css';

const Picker = ({
  color, colorIndex, clickHandler, incrementCount,
}) => (
  <div
    className={classes[`${color}_picker`]}
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

export default Picker;
