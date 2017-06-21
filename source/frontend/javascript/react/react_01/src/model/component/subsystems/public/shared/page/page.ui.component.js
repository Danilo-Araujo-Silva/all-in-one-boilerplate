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
			documentTitle={this.props.documentTitle}
			helmet={this.props.helmet}
			header={
				<Header
					{...this.props.header}
				/>
			}
			main={
				<Main
					title={this.props.title}
					breadcrumb={this.props.breadcrumb}
					{...this.props.main}
				>
					{this.props.children}
				</Main>
			}
			footer={
				<Footer
					{...this.props.footer}
				/>
			}
			{...this.props.page}
		/>
	}
}
