/**
 *
 */
import React from 'react'

import BaseStructure from 'model/component/base/structure'
import Nav from 'model/component/subsystems/shared/structure/nav'

/**
 *
 */
export default class NavStructure extends BaseStructure {

	/**
	 *
	 */
	render() {
		return <Nav
			{...this.props}
		/>
	}
}
