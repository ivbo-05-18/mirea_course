import React from 'react';
import { create } from 'react-test-renderer';
import Color from '../Color';

describe('[RENDER] Color – Snapshot test', () => {
  test('Matches the snapshot', () => {
    const color = create(<Color />);
    expect(color.toJSON()).toMatchSnapshot();
  });
});
