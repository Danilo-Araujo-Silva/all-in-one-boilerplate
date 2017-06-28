/**
 *
 */
import React from 'react'

import BaseStructure from 'model/component/base/structure'
import Main from 'model/component/subsystems/shared/structure/main'

/**
 *
 */
export default class MainStructure extends BaseStructure {

	/**
	 *
	 */
	render() {
		return <Main
			{...this.props}
		/>
	}
}
