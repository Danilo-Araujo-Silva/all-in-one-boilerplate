/**
 * Material UI Theme Provider component test.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import Base from 'model/component/base/base'
import reduxStore from 'model/state/redux/store'
import ThemeProvider from './theme-provider.component'

it('renders (using a store) without crashing', () => {
	const div = document.createElement('div')

	class Test extends Base {
		render() {
			return null
		}
	}

	ReactDOM.render(
		<Provider store={reduxStore}>
			<ThemeProvider>
				<Test />
			</ThemeProvider>
		</Provider>,
		div
	)
})
