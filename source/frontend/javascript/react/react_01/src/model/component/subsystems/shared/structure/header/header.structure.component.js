/**
 *
 */
import React from 'react'

import BaseStructure from 'model/component/base/structure'

/**
 *
 */
export default class HeaderStructure extends BaseStructure {

	/**
	 *
	 * @returns {XML}
	 */
	render() {
		return <header>
			{this.props.beforeChildren}
			{this.props.children}
			{this.props.afterChildren}
		</header>
	}
}
