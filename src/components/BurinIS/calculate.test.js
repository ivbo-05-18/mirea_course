import calculate from './calculate';

describe('Проверка верности расчётов', () => {
  test('x^2+6x+9', () => {
    expect(calculate(1, 6, 9)).toBe(`x1=x2=${-3}`);
  });
  test('5x+2', () => {
    expect(calculate(0, 5, 2)).toBe(`x1=${-0.4}`);
  });
  test('1x^2+5x+4', () => {
    expect(calculate(1, 5, 4)).toBe(`x1=${-1};x2=${-4}`);
  });
  test('2x', () => {
    expect(calculate(0, 2, 0)).toBe(`x1=${0}`);
  });
});
