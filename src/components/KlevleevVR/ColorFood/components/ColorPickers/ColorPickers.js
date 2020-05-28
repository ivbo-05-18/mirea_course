/* eslint-disable react/prop-types */
import React from 'react';
import Picker from '../Picker/Picker';
import styles from './ColorPickers.module.css';

const ColorPickers = ({ colors, clickHandler, incrementCount }) => {
  const pickers = colors.map((color, index) => <Picker color={color} key={`picker_${color}`} colorIndex={index} clickHandler={clickHandler} incrementCount={incrementCount} />);
  return (
    <div className={styles.pickers}>{pickers}</div>
  );
};

export default ColorPickers;
