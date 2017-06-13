/**
 * Header component test.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import store from 'model/state/redux/store'
import Header from './header.component'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header store={store} />, div);
});
