/**
 * Page UI component test.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import reduxStore from 'model/state/redux/store'
import PageUI from './page.ui.component'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<Provider store={reduxStore}>
			<PageUI />
		</Provider>,
		div
	)
})
