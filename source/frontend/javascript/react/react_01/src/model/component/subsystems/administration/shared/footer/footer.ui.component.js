/**
 * Footer UI component.
 */
import React from 'react'

import BaseUI from 'model/component/base/base.ui.component'
import Footer from 'model/component/subsystems/shared/footer/footer.component'

import './footer.ui.component.css'

/**
 *
 */
export default class FooterUI extends BaseUI {

	/**
	 *
	 */
	render() {
		return <Footer
			{...this.props.parent}
		>
			{this.props.beforeChildren}
			{this.props.children}
			{this.props.afterChildren}
		</Footer>
	}
}
