/* eslint-disable react/prop-types */
import React from 'react';
import Cell from '../Cell/Cell';
import styles from './Grid.module.css';

const Grid = ({ grid, colors }) => {
  const rows = Object.keys(grid.nodes).map((v) => (
    <Cell
      key={v}
      color={colors[grid.nodes[v].color]}
    />
  ));

  return (
    <div className={styles.grid}>
      {rows}
    </div>
  );
};

export default Grid;
