/**
 * Header UI component.
 */
import React from 'react'

import BaseUI from 'model/component/base/base.ui.component'

import './header.ui.component.css'

/**
 *
 */
export default class HeaderUI extends BaseUI {

	/**
	 *
	 */
	render() {
		return <header>
			{this.props.beforeChildren}
			{this.props.children}
			{this.props.afterChildren}
		</header>
	}
}
