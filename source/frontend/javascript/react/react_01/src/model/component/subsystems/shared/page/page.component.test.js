/**
 * Page component test.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import reduxStore from 'model/state/redux/store'
import Page from './page.component'

it('renders (using a store) without crashing', () => {
  const div = document.createElement('div')
	ReactDOM.render(
    <Provider store={reduxStore}>
			<BrowserRouter>
      	<Page />
			</BrowserRouter>
    </Provider>,
		div
	)
})
