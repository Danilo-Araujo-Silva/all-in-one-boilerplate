/**
 *
 */
import React from 'react'

import BaseStructure from 'model/component/base/structure'
import Header from 'model/component/subsystems/shared/structure/header'
import Nav from '../nav'

/**
 *
 */
export default class HeaderStructure extends BaseStructure {

	/**
	 *
	 */
	render() {
		const parentProps = Object.assign(
			{},
			this.props,
			{
				beforeNav: null,
				beforeChildren: null,
				children: null,
				afterChildren: null,
			}
		)

		return <Header
			{...parentProps}
		>
			{this.props.beforeNav}
			<Nav />
			{this.props.beforeChildren}
			{this.props.children}
			{this.props.afterChildren}
		</Header>
	}
}
