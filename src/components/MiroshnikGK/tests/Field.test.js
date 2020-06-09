import React from 'react';
import { create } from 'react-test-renderer';
import Field from '../Color/Field';

describe('[RENDER] Field – Snapshot test', () => {
  test('Matches the snapshot', () => {
    const field = create(<Field />);
    expect(field.toJSON()).toMatchSnapshot();
  });
});
