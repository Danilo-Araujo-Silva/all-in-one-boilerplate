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
	 */
	render() {
		return <header>
			{this.props.beforeChildren}
			{this.props.children}
			{this.props.afterChildren}
		</header>
	}
}
