/**Public
 * Root component of the application.
 */
import React from 'react'
import {Provider} from 'react-redux'

import 'model/configuration/dependencies'
import 'model/initializer'
import 'model/state/redux'
import Base from 'model/component/base/base'
import ThemeProvider from 'model/component/theme/theme-provider'
import Router from 'model/component/router'
import reduxStore from 'model/state/redux/store'

/**
 *
 */
export default class Root extends Base {

	/**
	 *
	 * @returns {XML}
	 */
	render() {
		return (
			<Provider store={reduxStore}>
				<ThemeProvider>
					<Router />
				</ThemeProvider>
			</Provider>
		)
	}
}
