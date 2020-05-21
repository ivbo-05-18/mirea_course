import converterl from './converter-logik';


describe('Тесты математики', () => {
  test('Standart numbers', () => {
    expect(converterl(6, 2, 3)).toBe('4.00');
  });
  test('Nothing', () => {
    expect(converterl('', '', '')).toBe(0);
  });
  test('Error', () => {
    expect(converterl('dddd', 'fdf', 'fddf')).toBe('NaN');
  });
});
