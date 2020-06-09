/* eslint-disable react/prop-types */
import React from 'react';
import classes from './Cell.module.css';

const Cell = ({ color }) => (
  <div className={classes[`${color}`]} />
);

export default Cell;
