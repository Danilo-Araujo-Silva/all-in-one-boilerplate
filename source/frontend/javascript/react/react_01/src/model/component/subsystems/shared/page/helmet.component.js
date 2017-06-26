/**
 * Helmet component.
 */
import React from 'react'
import BaseHelmet from 'react-helmet'

import Base from 'model/component/base/base.component'
import {get} from 'model/helper/immutable/map'
import properties from 'model/configuration/properties'

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
			defaultTitle={get(properties, 'application.title')}
			titleTemplate={
				this.props.overrideFullDocumentTitle
					? '%s'
					: `${get(properties, 'application.title')} - %s`
			}
		>
			<title>{this.props.documentTitle}</title>
		</BaseHelmet>
	}
}
