/**
 * Header UI component.
 */
import React from 'react'

import BaseUI from 'model/component/base/base.ui.component'
import Header from 'model/component/subsystems/shared/header/header.ui.component'

import './header.ui.component.css'

/**
 *
 */
export default class HeaderUI extends BaseUI {

	/**
	 *
	 */
	render() {
		return <Header
			{...this.props.parent}
		>
			{this.props.beforeChildren}
			{this.props.children}
			{this.props.afterChildren}
		</Header>
	}
}
