/**
 * Main component test.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
});
