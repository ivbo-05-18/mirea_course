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