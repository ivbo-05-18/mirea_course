import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import SpacePeople from './SpacePeople';


let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Loading indicator', () => {
  const { getByText } = render(<SpacePeople />);
  const linkElement = getByText('Fetching...');
  expect(linkElement).toBeInTheDocument();
});

test('SpacePeople Snapshot', () => {
  const direction = renderer.create(<SpacePeople />);
  expect(direction.toJSON()).toMatchSnapshot();
});
