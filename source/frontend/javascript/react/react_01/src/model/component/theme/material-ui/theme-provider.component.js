/**
 * Material UI theme provider component.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Base from 'model/component/base/base.component'
import theme from 'model/configuration/theme/material-ui/theme';

/**
 *
 */
export default class MaterialUIThemeProvider extends Base {

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
