import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import CoronaTime from '../coronatime';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Проверка работы с фейковым обращением', async () => {
  const fakeResp = {
    countrydata: [
      {
        total_cases: 0,
        total_new_cases_today: 1,
        total_recovered: 2,
        total_active_cases: 3,

      },
    ],
  };

  const mockJsonPromise = Promise.resolve(fakeResp); // 2
  const mockFetchPromise = Promise.resolve({
    // 3
    json: () => mockJsonPromise,
  });
  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

  await act(async () => {
    render(<CoronaTime />, container);
  });
  for (let i = 0; i < 4; i++) { expect(container.querySelectorAll('span')[i].textContent).toBe(`${i}`); }
  global.fetch.mockRestore();
});
