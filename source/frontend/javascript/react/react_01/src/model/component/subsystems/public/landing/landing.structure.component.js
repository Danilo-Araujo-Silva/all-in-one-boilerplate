/**
 *
 */
import React from 'react'

import BaseStructure from 'model/component/base/structure'
import Page from '../shared/structure/page'

/**
 *
 */
export default class LandingStructure extends BaseStructure {

	/**
	 *
	 * @returns {XML}
	 */
	render() {
		return <Page
			{...this.props}
		>
		</Page>
	}
}
