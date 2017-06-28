/**
 *
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import reduxStore from 'model/state/redux/store'
import LandingStyle from './landing.style.component'

it('renders (using a store) without crashing', () => {
  const div = document.createElement('div')
	ReactDOM.render(
    <Provider store={reduxStore}>
			<BrowserRouter>
      	<LandingStyle />
			</BrowserRouter>
    </Provider>,
		div
	)
})
