import React from 'react';
import { create } from 'react-test-renderer';

import Converter from './converter';

describe('[RENDER] Converter - Snapshot test', () => {
  test('Matches the snapshot', () => {
    const captcha = create(<Converter />);
    expect(captcha.toJSON()).toMatchSnapshot();
  });
});
