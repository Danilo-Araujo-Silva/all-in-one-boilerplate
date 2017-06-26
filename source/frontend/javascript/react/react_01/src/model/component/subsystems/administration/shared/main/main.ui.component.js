/**
 * Main UI component.
 */
import React from 'react'

import BaseUI from 'model/component/base/base.ui.component'
import Main from 'model/component/subsystems/shared/main/main.ui.component'

import './main.ui.component.css'

/**
 *
 */
export default class MainUI extends BaseUI {

	/**
	 *
	 */
	render() {
		let title = null
		if (this.props.title) {
			title = <h1>{this.props.title}</h1>
		}

		return <Main
			{...this.props.parent}
		>
			{this.props.beforeTitle}
			{title}
			{this.props.beforeChildren}
			{this.props.children}
			{this.props.afterChildren}
		</Main>
	}
}
