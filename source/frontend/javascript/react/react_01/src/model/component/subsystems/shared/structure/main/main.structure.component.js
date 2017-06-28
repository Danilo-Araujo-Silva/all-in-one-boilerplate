/**
 *
 */
import React from 'react'

import BaseStructure from 'model/component/base/structure'

/**
 *
 */
export default class MainStructure extends BaseStructure {

	/**
	 *
	 */
	render() {
		return <main>
			{this.props.beforeChildren}
			{this.props.children}
			{this.props.afterChildren}
		</main>
	}
}
