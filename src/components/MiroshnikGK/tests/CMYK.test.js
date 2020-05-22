import hexToCMYK from '../Color/hextocmyk';

describe('hex code to cmyk expression', () => {
  test('hex to cmyk', () => {
    expect(hexToCMYK('#000000')).toBe('0 0 0 1');
  });
});

describe('hex code to cmyk expression', () => {
  test('hex to cmyk', () => {
    expect(hexToCMYK('#123')).toBe('');
  });
});

describe('hex code to cmyk expression', () => {
  test('hex to cmyk', () => {
    expect(hexToCMYK('123123')).toBe('');
  });
});

describe('hex code to cmyk expression', () => {
  test('hex to cmyk', () => {
    expect(hexToCMYK('blue')).toBe('');
  });
});

describe('hex code to cmyk expression', () => {
  test('hex to cmyk', () => {
    const a = { 1: 'a', 2: 'b', 3: 'c' };
    expect(hexToCMYK(a)).toBeUndefined();
  });
});

describe('hex code to cmyk expression', () => {
  test('hex to cmyk', () => {
    const a = 123;
    expect(hexToCMYK(a)).toBeUndefined();
  });
});
