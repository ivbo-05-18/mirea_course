import React from 'react';
import { create } from 'react-test-renderer';
import { StyleRoot } from 'radium';
import Square from '../Color/Square';

describe('[RENDER] Square – Snapshot test', () => {
  test('Matches the snapshot', () => {
    const square = create(<StyleRoot><Square /></StyleRoot>);
    expect(square.toJSON()).toMatchSnapshot();
  });
});
