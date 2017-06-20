/**
 * Footer UI component.
 */
import React from 'react'

import BaseUI from 'model/component/base/base.ui.component'

import './footer.ui.component.css'

/**
 *
 */
export default class FooterUI extends BaseUI {

	/**
	 *
	 */
	render() {
		return <footer>
			{this.props.beforeChildren}
			{this.props.children}
			{this.props.afterChildren}
		</footer>
	}
}
