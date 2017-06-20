/**
 * Landing UI component.
 */
import React from 'react'

import BaseUI from 'model/component/base/base.ui.component'
import Page from './../shared/page/page.component'

import './landing.ui.component.css'

/**
 *
 */
export default class LandingUI extends BaseUI {

	/**
	 *
	 */
	render() {
		return <Page
			title="Landing"
		>
			<p>Test</p>
		</Page>
	}
}
