/**
 *
 */
import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import reduxStore from 'model/state/redux/store'
import Router from './router.component'

it('renders (using a store) without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<Provider store={reduxStore}>
			<Router />
		</Provider>,
		div
	)
})
