import calculate from './calculate';

describe('Проверка верности расчётов', () => {
  test('x^2+6x+9', () => {
    const solve = calculate('1', '6', '9');
    expect(solve.x1).toBe(-3);
    expect(solve.x2).toBe(-3);
    expect(solve.flag).toBe(1);
  });
  test('5x+2', () => {
    const solve = calculate('0', '5', '2');
    expect(solve.x1).toBe(-0.4);
    expect(solve.flag).toBe(2);
  });
  test('1x^2+5x+4', () => {
    const solve = calculate('1', '5', '4');
    expect(solve.x1).toBe(-1);
    expect(solve.x2).toBe(-4);
    expect(solve.flag).toBe(1);
  });
  test('2x', () => {
    const solve = calculate('0', '2', '0');
    expect(solve.x1).toBe(-0);
    expect(solve.flag).toBe(2);
  });
  test('3', () => {
    const solve = calculate('0', '0', '3');
    expect(solve.flag).toBe(3);
  });
  test('5x^2+x+1', () => {
    const solve = calculate('5', '1', '1');
    expect(solve.flag).toBe(0);
  });
});
