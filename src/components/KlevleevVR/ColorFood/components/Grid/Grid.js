/* eslint-disable react/prop-types */
import React from 'react';
import Cell from '../Cell/Cell';
import './Grid.css';

const Grid = ({ grid, colors }) => {
  const rows = Object.keys(grid.nodes).map((v) => (
    <Cell
      key={v}
      color={colors[grid.nodes[v].color]}
      size={grid.size}
    />
  ));

  return (
    <div className="grid">
      {rows}
    </div>
  );
};

export default Grid;
