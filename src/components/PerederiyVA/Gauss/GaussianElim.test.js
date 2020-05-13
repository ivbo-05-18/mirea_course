const GaussianElim = require('./GaussianElim');

describe("Solve linear equation systems with n = 1:",()=>{
    test('System 1', () => {
        expect(GaussianElim([[5, 10]])).toStrictEqual([2]);
    })
    test('System 2', () => {
        expect(GaussianElim([[2.5, 15]])).toStrictEqual([6]);
    })
    test('System 3', () => {
        expect(GaussianElim([[7.3, 17.885]])).toStrictEqual([2.45]);
    })
    test('System 4 - no solutions', () => {
        expect(GaussianElim([[0, 10]])).toStrictEqual(undefined);
    })
})

describe("Solve linear equation systems with n = 2:",()=>{
    test('System 1', () => {
        expect(GaussianElim([[1, -1, 3],[-1, 2, 1]])).toStrictEqual([7,4]);
    })
    test('System 2', () => {
        expect(GaussianElim([[3, -2, -6],[5, 1, 3]])).toStrictEqual([0,3]);
    })
    test('System 3', () => {
        expect(GaussianElim([[2.5, 2, 4],[5, 1, 15.875]])).toStrictEqual([3.7,-2.625]);
    })
    test('System 4 - no solutions', () => {
        expect(GaussianElim([[0, 0, 3],[-1, 2, 1]])).toStrictEqual(undefined);
    })
    test('System 5 - no solutions', () => {
        expect(GaussianElim([[0, 1, 4],[0, 2, 4]])).toStrictEqual(undefined);
    })
    test('System 6 - no solutions', () => {
        expect(GaussianElim([[1, 2, 5],[1, 2, 10]])).toStrictEqual(undefined);
    })
})

describe("Solve linear equation systems with n = 3:",()=>{
    test('System 1', () => {
        expect(GaussianElim([[4, 1, 2, 7],[1, 3, 1, 5], [1, 1, 2, 4]])).toStrictEqual([1, 1, 1]);
    })
    test('System 2', () => {
        expect(GaussianElim([[1, 2, 0, 10],[2, 0, 1, 5], [0, 1, 2, 15]])).toStrictEqual([0, 5, 5]);
    })
    test('System 3 - no solutions', () => {
        expect(GaussianElim([[0, 1, 1, 2],[0, 1, 1, 2], [0, 1, 1, 2]])).toStrictEqual(undefined);
    })
    test('System 4 - no solutions', () => {
        expect(GaussianElim([[1, 2, 4, 7],[3, 6, 3, 5], [1, 2, 8, 4]])).toStrictEqual(undefined);
    })
})

describe("Test wrong input data handling:",()=>{
    test('Wrong input data - null', () => {
        expect(() => {GaussianElim(null)}).toThrowError("неверный формат данных");
    })
    test('Wrong input data - undefined', () => {
        expect(() => {GaussianElim(null)}).toThrowError("неверный формат данных");
    })
    test('Wrong input data - boolean', () => {
        expect(() => {GaussianElim(true)}).toThrowError("неверный формат данных");
    })
    test('Wrong input data - string', () => {
        expect(() => {GaussianElim("test")}).toThrowError("неверный формат данных");
    })
    test('Wrong input data - single integer', () => {
        expect(() => {GaussianElim(5)}).toThrowError(new Error("неверный формат данных"));
    })
    test('Wrong input data - array', () => {
        expect(() => {GaussianElim([6, "test", 45])}).toThrowError(new Error("неверный формат данных"));
    })
    test('Wrong input data - array with one array element and other types for other elements (not a matrix)', () => {
        expect(() => {GaussianElim([[6,3], "test", 45])}).toThrowError(new Error("неверный формат данных"));
    })
    test('Wrong input data - wrong matrix format', () => {
        expect(() => {GaussianElim([[1,2],[3,4]])}).toThrowError(new Error("неверный формат матрицы"));
    })
    test('Wrong input data - part of the matrix is wrong type', () => {
        expect(() => {GaussianElim([["",2,3],[3,4,5]])}).toThrowError(new Error("неверный формат данных в матрице"));
    })
})

describe("Test big values:",()=>{
    test('Infinity as a result should throw an error - test 1', () => {
        expect(() => {GaussianElim([[10e-200, 10e+200]])}).toThrowError("ответ - слишком большое число по модулю");
    })
    test('Infinity as a result should throw an error - test 2', () => {
        expect(() => {GaussianElim([[1, 0, 1],[0, 10e-200, 10e+200]])}).toThrowError("ответ - слишком большое число по модулю");
    })
    test('Minus infinity as a result should throw an error', () => {
        expect(() => {GaussianElim([[1, 0, 1],[0, -10e-200, 10e+200]])}).toThrowError("ответ - слишком большое число по модулю");
    })
    test('Infinity as input data should throw an error - test 1', () => {
        expect(() => {GaussianElim([[10e1000, 0]])}).toThrowError("входные данные слишком велики по модулю");
    })
    test('Infinity as input data should throw an error - test 2', () => {
        expect(() => {GaussianElim([[1, 10e1000]])}).toThrowError("входные данные слишком велики по модулю");
    })
    test('Infinity as input data should throw an error - test 3', () => {
        expect(() => {GaussianElim([[4, 1, 2, 7],[10e1000, 3, 1, 5], [1, 1, 2, 4]])}).toThrowError("входные данные слишком велики по модулю");
    })
    test('Infinity as input data should throw an error - test 4', () => {
        expect(() => {GaussianElim([[4, 1, 2, 10e1000],[2, 3, 1, 5], [1, 1, 2, 4]])}).toThrowError("входные данные слишком велики по модулю");
    })
    test('Minus infinity as input data should throw an error', () => {
        expect(() => {GaussianElim([[4, 1, 2, -10e1000],[2, 3, 1, 5], [1, 1, 2, 4]])}).toThrowError("входные данные слишком велики по модулю");
    })
})