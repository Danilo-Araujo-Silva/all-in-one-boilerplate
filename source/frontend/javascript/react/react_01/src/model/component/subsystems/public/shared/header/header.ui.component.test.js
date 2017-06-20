/**
 * Header UI component test.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import reduxStore from 'model/state/redux/store'
import HeaderUI from './header.ui.component'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<Provider store={reduxStore}>
			<HeaderUI />
		</Provider>,
		div
	)
})
