import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextTransformer from '../TextTransformer';

let container;
const testData = ['test', 'ELEMENT'];

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});
it('test -> TEST', () => {
  // Тестируем первый рендер и эффект
  const { getByLabelText } = render(<TextTransformer />);
  // Тестируем второй рендер и эффект
  fireEvent.change(getByLabelText('Input Text:'), { target: { value: testData[0] } });

  const val = getByLabelText('Input Text:').value;
  expect(val).not.toMatch(/test/);
  expect(val).toMatch(/TEST/);
});
it('ELEMENT -> element', () => {
  // Тестируем первый рендер и эффект
  const { getByLabelText } = render(<TextTransformer />);
  // Тестируем второй рендер и эффект
  fireEvent.change(getByLabelText('Input Text:'), { target: { value: testData[1] } });

  const val = getByLabelText('Input Text:').value;

  expect(val).not.toMatch(/ELEMENT/);
  expect(val).toMatch(/element/);
});
