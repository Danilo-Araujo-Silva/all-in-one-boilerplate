/**
 *
 */
import React from 'react'

import BaseStructure from 'model/component/base/structure'
import Helmet from './helmet'
import Header from 'model/component/subsystems/shared/structure/header'
import Main from 'model/component/subsystems/shared/structure/main'
import Footer from 'model/component/subsystems/shared/structure/footer'

/**
 *
 */
export default class PageStructure extends BaseStructure {

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
PageStructure.defaultProps = {
	helmetComponent: Helmet,
	headerComponent: Header,
	mainComponent: Main,
	footerComponent: Footer,
}
