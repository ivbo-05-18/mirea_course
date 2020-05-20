/* eslint-disable react/prop-types */
import React from 'react';
import './Cell.css';

const Cell = ({ color, size }) => {
  const classString = `cell-${size} ${color}`;
  return (
    <div className={classString} />
  );
};

export default Cell;
