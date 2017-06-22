/**
 * About UI component.
 */
import React from 'react'

import BaseUI from 'model/component/base/base.ui.component'
import Page from './../shared/page/page.component'

import './about.ui.component.css'

/**
 *
 */
export default class AboutUI extends BaseUI {

	/**
	 *
	 * @returns {XML}
	 */
	render() {
		return <Page
			title="About"
		>
		</Page>
	}
}
