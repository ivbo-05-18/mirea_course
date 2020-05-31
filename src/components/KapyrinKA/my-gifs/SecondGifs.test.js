import React from 'react';
import { checkErrors } from './SecondGifs';
import Gifs from './Gifs';

describe('Input not digit, semidiget, float numbers, negative number and etc', () => {
  test('Input a string', () => {
    expect(checkErrors('hello World!')).toBe('Ошибка ввода!');
  });
  test('Input a string with numbers to the left of a string', () => {
    expect(checkErrors('123Hello world!')).toBe('Ошибка ввода!');
  });
  test('Input a string with numbers at the end', () => {
    expect(checkErrors('Hello World!123')).toBe('Ошибка ввода!');
  });
  test('Input float number', () => {
    expect(checkErrors('2,4')).toBe('Ошибка ввода!');
  });
  test('Input negative number', () => {
    expect(checkErrors('-5')).toBe('Ошибка ввода!');
  });
  test('Input NULL', () => {
    expect(checkErrors()).toBe('Вы не ввели число!');
  });
  test('Input too big number', () => {
    expect(checkErrors('100')).toBe('Число больше девяти!');
  });
  test('Input appropriate number', () => {
    expect(checkErrors('5')).toStrictEqual(<Gifs num="5" />);
  });
});
