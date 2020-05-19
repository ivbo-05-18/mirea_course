const money = require('./moneywork');

describe('Standart test', () => {
  test('Test 1', () => {
    expect(money(0, 'dol')).toStrictEqual('Доллары');
    expect(money(0, 'eur')).toStrictEqual('Евро');
  });
  test('Test 2', () => {
    expect(money(123, 'dol')).toStrictEqual('1.67$');
    expect(money(123, 'eur')).toStrictEqual('1.54€');
  });
  test('Test 3', () => {
    expect(money(5645.54, 'dol')).toStrictEqual('76.78$');
    expect(money(5645.54, 'eur')).toStrictEqual('70.75€');
  });
  test('Test 4', () => {
    expect(money(-1, 'dol')).toStrictEqual('Доллары');
    expect(money(-1, 'eur')).toStrictEqual('Евро');
  });
});

describe('Testing words', () => {
  test('Test 1', () => {
    expect(money('asdg', 'dol')).toStrictEqual('Доллары');
    expect(money('asdg', 'eur')).toStrictEqual('Евро');
  });
  test('Test 2', () => {
    expect(money('aderfhsdf', 'dol')).toStrictEqual('Доллары');
    expect(money('aderfhsdf', 'eur')).toStrictEqual('Евро');
  });
  test('Test 3', () => {
    expect(money('fy3456ukvb', 'dol')).toStrictEqual('Доллары');
    expect(money('fy3456ukvb', 'eur')).toStrictEqual('Евро');
  });
  test('Test 4', () => {
    expect(money('e356ue5r6u', 'dol')).toStrictEqual('Доллары');
    expect(money('e356ue5r6u', 'eur')).toStrictEqual('Евро');
  });
});

describe('Testing second param', () => {
  test('Test 1', () => {
    expect(money('asdg', 'wsr')).toStrictEqual(' ');
    expect(money('asdg', 'sdtjh')).toStrictEqual(' ');
  });
  test('Test 2', () => {
    expect(money(0, 'ddfh')).toStrictEqual(' ');
    expect(money(0, 'dsfhd')).toStrictEqual(' ');
  });
  test('Test 3', () => {
    expect(money('fy3456ukvb', '567')).toStrictEqual(' ');
    expect(money('fy3456ukvb', '457')).toStrictEqual(' ');
  });
  test('Test 4', () => {
    expect(money(2435, 'rurr')).toStrictEqual(' ');
    expect(money(2435, 'dfg')).toStrictEqual(' ');
  });
});
