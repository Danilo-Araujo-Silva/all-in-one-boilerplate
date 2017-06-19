/**
 * Page UI component.
 */
import React from 'react'

import BaseUI from 'model/component/base/base.ui.component'
import Header from 'model/component/subsystems/shared/header/header.component'
import Main from 'model/component/subsystems/shared/main/main.component'
import Footer from 'model/component/subsystems/shared/footer/footer.component'

import './page.ui.component.css'

/**
 *
 */
export default class PageUI extends BaseUI {

	/**
	 *
	 */
	render() {
		return <div>
			<Header />
			<Main />
			<Footer />
		</div>
	}
}
