import React from 'react';
import { create } from 'react-test-renderer';
import Sentences from './Sentences';
// import ReactDOM from 'react-dom';

describe('Snapshot match test', () => {
  test('Matches the snapshot', () => {
    const snap = create(<Sentences />);
    expect(snap.toJSON()).toMatchSnapshot();
  });
});

// *** simple render test ***
// it('Renders successfully', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Sentences />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
