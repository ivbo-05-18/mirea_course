import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import TextTransformer from '../TextTransformer';
import {render, fireEvent, cleanup} from '@testing-library/react';

let container;
const testData = ["test", "ELEMENT"];
    
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
    const { getByText, getByLabelText } = render(<TextTransformer />);
    // Тестируем второй рендер и эффект
      fireEvent.change(getByLabelText("Input Text:"), {target: {value: testData[0] } } )

      const val = getByLabelText("Input Text:").value;
      expect(val).not.toMatch(/test/);
      expect(val).toMatch(/TEST/);
  });
it('ELEMENT -> element', () => {
    // Тестируем первый рендер и эффект
    const { getByText, getByLabelText } = render(<TextTransformer />);
    // Тестируем второй рендер и эффект
      fireEvent.change(getByLabelText("Input Text:"), {target: {value: testData[1] } } )

      const val = getByLabelText("Input Text:").value;

      expect(val).not.toMatch(/ELEMENT/);
      expect(val).toMatch(/element/);

  });