/**
 *
 */
import React from 'react'

import BaseStructure from 'model/component/base/structure'
import Footer from 'model/component/subsystems/shared/structure/footer'

/**
 *
 */
export default class FooterStructure extends BaseStructure {

	/**
	 *
	 */
	render() {
		return <Footer
			{...this.props.parent}
		>
			{this.props.beforeChildren}
			{this.props.children}
			{this.props.afterChildren}
		</Footer>
	}
}
