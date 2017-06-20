/**
 * Helmet component.
 */
import React from 'react'
import BaseHelmet from 'react-helmet'

import Base from 'model/component/base/base.component'

/**
 *
 */
export default class Helmet extends Base {

	/**
	 *
	 * @returns {XML}
	 */
	render() {
		return <BaseHelmet
			defaultTitle='All in One'
			titleTemplate='All in One - %s'
		>
			<title>{this.props.title}</title>
		</BaseHelmet>
	}
}
