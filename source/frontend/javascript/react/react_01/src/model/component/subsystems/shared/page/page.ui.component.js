/**
 * Page UI component.
 */
import React from 'react'

import BaseUI from 'model/component/base/base.ui.component'
import Helmet from './helmet.component'
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
			<Helmet
				title={this.props.title}
				{...this.props.helmet}
			/>
			{this.props.beforeHeader}
			{this.props.header}
			{this.props.betweenHeaderAndMain}
			{
				this.props.main
				|| <Main>{this.props.children}</Main>
			}
			{this.props.betweenMainAndFooter}
			{this.props.footer}
			{this.props.afterFooter}
		</div>
	}
}

/**
 *
 * @type {{header: XML, main: XML, footer: XML}}
 */
PageUI.defaultProps = {
	header: <Header />,
	footer: <Footer />
}
