import React from 'react';
import { create } from 'react-test-renderer';

import Solver from './Solver';

describe('[RENDER] Solver - Snapshot test', () => {
  test('Matches the snapshot', () => {
    const captcha = create(<Solver />);
    expect(captcha.toJSON()).toMatchSnapshot();
  });
});
