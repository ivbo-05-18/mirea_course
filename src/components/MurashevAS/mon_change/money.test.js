const money = require('./moneywork');

describe("Standart test",()=>{
    test('Test 1', () => {
        expect(money(0,'dol',70)).toStrictEqual('Доллары');
        expect(money(0,'eur',80)).toStrictEqual('Евро');
    })
    test('Test 2', () => {
        expect(money(123,'dol',70)).toStrictEqual((123/70).toFixed(2)+'$');
        expect(money(123,'eur',80)).toStrictEqual((123/80).toFixed(2)+'€');
    })
    test('Test 3', () => {
        expect(money(5645.54,'dol',70.5)).toStrictEqual((5645.54/70.5).toFixed(2)+'$');
        expect(money(5645.54,'eur',80.1)).toStrictEqual((5645.54/80.1).toFixed(2)+'€');
    })
    test('Test 4', () => {
        expect(money(-1,'dol',70)).toStrictEqual('Доллары');
        expect(money(-1,'eur',80)).toStrictEqual('Евро');
    })
})


describe("Testing words",()=>{
    test('Test 1', () => {
        expect(money('asdg','dol',70)).toStrictEqual('Доллары');
        expect(money('asdg','eur',80)).toStrictEqual('Евро');
    })
    test('Test 2', () => {
        expect(money('aderfhsdf','dol',70)).toStrictEqual('Доллары');
        expect(money('aderfhsdf','eur',80)).toStrictEqual('Евро');
    })
    test('Test 3', () => {
        expect(money('fy3456ukvb','dol',70)).toStrictEqual('Доллары');
        expect(money('fy3456ukvb','eur',80)).toStrictEqual('Евро');
    })
    test('Test 4', () => {
        expect(money('e356ue5r6u','dol',70)).toStrictEqual('Доллары');
        expect(money('e356ue5r6u','eur',80)).toStrictEqual('Евро');
    })
})

describe("Testing second param",()=>{
    test('Test 1', () => {
        expect(money('asdg','wsr',70)).toStrictEqual(' ');
        expect(money('asdg','sdtjh',80)).toStrictEqual(' ');
    })
    test('Test 2', () => {
        expect(money(0,'ddfh',70)).toStrictEqual(' ');
        expect(money(0,'dsfhd',80)).toStrictEqual(' ');
    })
    test('Test 3', () => {
        expect(money('fy3456ukvb','567',70)).toStrictEqual(' ');
        expect(money('fy3456ukvb','457',80)).toStrictEqual(' ');
    })
    test('Test 4', () => {
        expect(money(2435,'rurr',70)).toStrictEqual(' ');
        expect(money(2435,'dfg',80)).toStrictEqual(' ');
    })
})

describe("Testing third param",()=>{
    test('Test 1', () => {
        expect(money(2435,'dol',-1)).toStrictEqual('Доллары');
        expect(money(2435,'eur',-1)).toStrictEqual('Евро');
    })
    test('Test 2', () => {
        expect(money(2435,'dol',0)).toStrictEqual('Доллары');
        expect(money(2435,'eur',0)).toStrictEqual('Евро');
    })
    test('Test 3', () => {
        expect(money(2435,'dol','asfaf')).toStrictEqual('Доллары');
        expect(money(2435,'eur','atehge')).toStrictEqual('Евро');
    })
    test('Test 4', () => {
        expect(money(2435,'dol','dfg')).toStrictEqual('Доллары');
        expect(money(2435,'eur','asdfh')).toStrictEqual('Евро');
    })
})