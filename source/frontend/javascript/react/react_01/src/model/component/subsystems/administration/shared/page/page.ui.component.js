/**
 * Page UI component.
 */
import React from 'react'

import BaseUI from 'model/component/base/base.ui.component'
import Page from 'model/component/subsystems/shared/page/page.component'
import Header from './../header/header.component'
import Main from './../main/main.component'
import Footer from './../footer/footer.component'

import './page.ui.component.css'

/**
 *
 */
export default class PageUI extends BaseUI {

	/**
	 *
	 * @returns {XML}
	 */
	render() {
		return <Page
			{...this.props}
		/>
	}
}

/**
 *
 * @type {{headerComponent: *, mainComponent: *, footerComponent: *}}
 */
PageUI.defaultProps = {
	headerComponent: Header,
	mainComponent: Main,
	footerComponent: Footer,
}
