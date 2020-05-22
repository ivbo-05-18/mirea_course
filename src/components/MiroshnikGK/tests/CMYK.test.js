import hexToCMYK from '../Color/hextocmyk';

describe('hex to cmyk with right string', () => {
  test('hex to cmyk success', () => {
    expect(hexToCMYK('#000000')).toBe('0 0 0 1');
  });
});

describe('hex to cmyk with inappropriate string', () => {
  test('with wrong quantity of symbols', () => {
    expect(hexToCMYK('#123')).toBe('');
  });
  test('with no #', () => {
    expect(hexToCMYK('123123')).toBe('');
  });
  test('with wrong string format', () => {
    expect(hexToCMYK('blue')).toBe('');
  });
});


describe('hex to cmyk with wrong input data', () => {
  test('with list', () => {
    const a = { 1: 'a', 2: 'b', 3: 'c' };
    expect(hexToCMYK(a)).toBeUndefined();
  });
  test('with number', () => {
    const a = 123;
    expect(hexToCMYK(a)).toBeUndefined();
  });
  test('with null', () => {
    const a = null;
    expect(hexToCMYK(a)).toBeUndefined();
  });
  test('with boolean', () => {
    const a = true;
    expect(hexToCMYK(a)).toBeUndefined();
  });
  test('with function', () => {
    const a = hexToCMYK;
    expect(hexToCMYK(a)).toBeUndefined();
  });
});
