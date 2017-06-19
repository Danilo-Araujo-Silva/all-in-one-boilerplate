/**
 * Landing component test.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import reduxStore from 'model/state/redux/store'
import Landing from './landing.component'

it('renders (using a store) without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Landing store={reduxStore} />, div);
})
