/**
 *
 */
import React from 'react'

import BaseStructure from 'model/component/base/structure'

/**
 *
 */
export default class NavStructure extends BaseStructure {

	/**
	 *
	 * @returns {XML}
	 */
	render() {
		return <nav>
			{this.props.beforeChildren}
			{this.props.children}
			{this.props.afterChildren}
		</nav>
	}
}
