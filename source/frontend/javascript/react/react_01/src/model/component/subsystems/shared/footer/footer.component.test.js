/**
 * Footer component test.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import store from 'model/state/redux/store'
import Footer from './footer.component'

it('renders (using a store) without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer store={store} />, div);
})
