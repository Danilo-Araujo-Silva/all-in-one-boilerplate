/**
 *
 */
import React from 'react'

import BaseStructure from 'model/component/base/structure'
import Page from 'model/component/subsystems/shared/structure/page'
import Header from '../header'
import Main from '../main'
import Footer from '../footer'

/**
 *
 */
export default class PageStructure extends BaseStructure {

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
PageStructure.defaultProps = {
	headerComponent: Header,
	mainComponent: Main,
	footerComponent: Footer,
}
