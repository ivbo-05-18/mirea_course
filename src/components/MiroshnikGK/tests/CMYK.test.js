import hexToCMYK from '../Color/hextocmyk';

describe('hex code to cmyk expression', () => {
  test('hex to cmyk', () => {
    expect(hexToCMYK('#000000')).toBe('0 0 0 1');
  });
});
