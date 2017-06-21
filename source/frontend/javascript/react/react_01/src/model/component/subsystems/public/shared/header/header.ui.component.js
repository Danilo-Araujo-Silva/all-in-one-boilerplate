/**
 * Header UI component.
 */
import React from 'react'

import BaseUI from 'model/component/base/base.ui.component'
import Header from 'model/component/subsystems/shared/header/header.ui.component'
import Nav from './../nav/nav.component'

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
			{this.props.beforeNav}
			<Nav />
			{this.props.betweenNavAndChildren}
			{this.props.children}
			{this.props.afterChildren}
		</Header>
	}
}
