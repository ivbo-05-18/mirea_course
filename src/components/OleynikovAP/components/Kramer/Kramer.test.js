import slauResult from './slauResult';

describe('Solve linear equation systems with n = 1:', () => {
  test('System 1', () => {
    expect(slauResult([[5, 10]]).roots).toStrictEqual([2]);
  });
  test('System 2', () => {
    expect(slauResult([[2.5, 15]]).roots).toStrictEqual([6]);
  });
  test('System 3', () => {
    expect(slauResult([[7.3, 17.885]]).roots).toStrictEqual([2.45]);
  });
  test('System 4 - no solutions', () => {
    expect(slauResult([[0, 10]]).roots).toStrictEqual(null);
  });
});

describe('Solve linear equation systems with n = 2:', () => {
  test('System 1', () => {
    expect(slauResult([[1, -1, 3], [-1, 2, 1]]).roots).toStrictEqual([7, 4]);
  });
  test('System 2', () => {
    expect(slauResult([[3, -2, -6], [5, 1, 3]]).roots).toStrictEqual([0, 3]);
  });
  test('System 3', () => {
    expect(slauResult([[2.5, 2, 4], [5, 1, 15.875]]).roots).toStrictEqual([3.7, -2.625]);
  });
  test('System 4 - no solutions', () => {
    expect(slauResult([[0, 0, 3], [-1, 2, 1]]).roots).toStrictEqual(null);
  });
  test('System 5 - no solutions', () => {
    expect(slauResult([[0, 1, 4], [0, 2, 4]]).roots).toStrictEqual(null);
  });
  test('System 6 - no solutions', () => {
    expect(slauResult([[1, 2, 5], [1, 2, 10]]).roots).toStrictEqual(null);
  });
});

describe('Solve linear equation systems with n = 3:', () => {
  test('System 1', () => {
    expect(slauResult([[4, 1, 2, 7], [1, 3, 1, 5], [1, 1, 2, 4]]).roots).toStrictEqual([1, 1, 1]);
  });
  test('System 2', () => {
    expect(slauResult([[1, 2, 0, 10], [2, 0, 1, 5], [0, 1, 2, 15]]).roots).toStrictEqual([0, 5, 5]);
  });
  test('System 3 - no solutions', () => {
    expect(slauResult([[0, 1, 1, 2], [0, 1, 1, 2], [0, 1, 1, 2]]).roots).toStrictEqual(null);
  });
  test('System 4 - no solutions', () => {
    expect(slauResult([[1, 2, 4, 7], [3, 6, 3, 5], [1, 2, 8, 4]]).roots).toStrictEqual(null);
  });
});

describe('Test wrong input data handling:', () => {
  test('Wrong input data - null', () => {
    expect(() => slauResult(null).roots).toThrowError('неверный формат данных');
  });
  test('Wrong input data - undefined', () => {
    expect(() => slauResult(null).roots).toThrowError('неверный формат данных');
  });
  test('Wrong input data - boolean', () => {
    expect(() => slauResult(true).roots).toThrowError('неверный формат данных');
  });
  test('Wrong input data - string', () => {
    expect(() => slauResult('test').roots).toThrowError('неверный формат данных');
  });
  test('Wrong input data - single integer', () => {
    expect(() => slauResult(5).roots).toThrowError(new Error('неверный формат данных'));
  });
  test('Wrong input data - array', () => {
    expect(() => slauResult([6, 'test', 45]).roots).toThrowError(new Error('неверный формат данных'));
  });
  test('Wrong input data - array with one array element and other types for other elements (not a matrix)', () => {
    expect(() => slauResult([[6, 3], 'test', 45]).roots).toThrowError(new Error('неверный формат данных'));
  });
  test('Wrong input data - wrong matrix format', () => {
    expect(() => slauResult([[1, 2], [3, 4]]).roots).toThrowError(new Error('неверный формат матрицы'));
  });
});

describe('Test big values:', () => {
  test('Infinity as a result should throw an error - test 1', () => {
    expect(() => slauResult([[10e-200, 10e+200]]).roots).toThrowError('ответ - слишком большое число по модулю');
  });
  test('Infinity as a result should throw an error - test 2', () => {
    expect(() => slauResult([[1, 0, 1], [0, 10e-200, 10e+200]]).roots).toThrowError('ответ - слишком большое число по модулю');
  });
  test('Minus infinity as a result should throw an error', () => {
    expect(() => slauResult([[1, 0, 1], [0, -10e-200, 10e+200]]).roots).toThrowError('ответ - слишком большое число по модулю');
  });
  test('Infinity as input data should throw an error - test 1', () => {
    expect(() => slauResult([[10e1000, 0]]).roots).toThrowError('входные данные слишком велики по модулю');
  });
  test('Infinity as input data should throw an error - test 2', () => {
    expect(() => slauResult([[1, 10e1000]]).roots).toThrowError('входные данные слишком велики по модулю');
  });
  test('Infinity as input data should throw an error - test 3', () => {
    expect(() => slauResult([[4, 1, 2, 7], [10e1000, 3, 1, 5], [1, 1, 2, 4]]).roots).toThrowError('входные данные слишком велики по модулю');
  });
  test('Infinity as input data should throw an error - test 4', () => {
    expect(() => slauResult([[4, 1, 2, 10e1000], [2, 3, 1, 5], [1, 1, 2, 4]]).roots).toThrowError('входные данные слишком велики по модулю');
  });
  test('Minus infinity as input data should throw an error', () => {
    expect(() => slauResult([[4, 1, 2, -10e1000], [2, 3, 1, 5], [1, 1, 2, 4]]).roots).toThrowError('входные данные слишком велики по модулю');
  });
});
