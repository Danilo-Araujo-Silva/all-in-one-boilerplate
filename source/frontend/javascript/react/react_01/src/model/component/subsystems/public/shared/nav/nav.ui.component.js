/**
 * Nav UI component.
 */
import React from 'react'

import BaseUI from 'model/component/base/base.ui.component'
import Nav from 'model/component/subsystems/shared/nav/nav.ui.component'

import './nav.ui.component.css'

/**
 *
 */
export default class NavUI extends BaseUI {

	/**
	 *
	 */
	render() {
		return <Nav
			{...this.props.parent}
		>
			{this.props.beforeChildren}
			{this.props.children}
			{this.props.afterChildren}
		</Nav>
	}
}
