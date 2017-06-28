/**
 *
 */
import React from 'react'

import BaseStructure from 'model/component/base/structure'

/**
 *
 */
export default class FooterStructure extends BaseStructure {

	/**
	 *
	 * @returns {XML}
	 */
	render() {
		return <footer>
			{this.props.beforeChildren}
			{this.props.children}
			{this.props.afterChildren}
		</footer>
	}
}
