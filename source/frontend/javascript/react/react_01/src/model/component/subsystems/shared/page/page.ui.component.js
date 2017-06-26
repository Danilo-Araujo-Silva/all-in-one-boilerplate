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
	 * @returns {XML}
	 */
	render() {
		const Helmet = this.props.helmetComponent
		const Header = this.props.headerComponent
		const Main = this.props.mainComponent
		const Footer = this.props.footerComponent

		return <div>
			{this.props.beforeHelmet}
			<Helmet
				documentTitle={
					this.props.documentTitle
					|| this.props.title
				}
				{...this.props.helmetProps}
			>
				{this.props.helmetChildren}
			</Helmet>
			{this.props.beforeHeader}
			<Header
				{...this.props.headerProps}
			>
				{this.props.headerChildren}
			</Header>
			{this.props.beforeMain}
			<Main
				{...this.props.mainProps}
			>
				{this.props.mainChildren}
				{this.props.children}
			</Main>
			{this.props.beforeFooter}
			<Footer
				{...this.props.footerProps}
			>
				{this.props.footerChildren}
			</Footer>
			{this.props.afterFooter}
		</div>
	}
}

/**
 *
 * @type {{helmetComponent: Helmet, headerComponent, mainComponent, footerComponent}}
 */
PageUI.defaultProps = {
	helmetComponent: Helmet,
	headerComponent: Header,
	mainComponent: Main,
	footerComponent: Footer,
}
