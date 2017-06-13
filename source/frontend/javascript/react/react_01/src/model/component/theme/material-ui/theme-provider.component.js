/**
 * Material UI theme provider component.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from 'model/component/main/main.component'
import theme from 'model/configuration/theme/material-ui/theme';

/**
 *
 */
export default class MaterialUIThemeProvider extends Main {

	/**
	 *
	 * @returns {XML}
	 */
	render() {
		return (
			<MuiThemeProvider muiTheme={theme}>
				{this.props.children}
			</MuiThemeProvider>
		)
	}
}
