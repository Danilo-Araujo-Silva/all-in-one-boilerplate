/**
 * Nav UI component.
 */
import React from 'react'
import {Link} from 'react-router-dom'

import BaseUI from 'model/component/base/base.ui.component'

import './nav.ui.component.css'

/**
 *
 */
export default class NavUI extends BaseUI {

	/**
	 *
	 */
	render() {
		return <nav>
			<Link to="/about">About</Link>
			<Link to="/careers">Careers</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/frequently-asked-questions">Frequently Asked Questions</Link>
			<Link to="/faq">FAQ</Link>
			<Link to="/help">Help</Link>
			<Link to="/landing">Landing</Link>
			<Link to="/privacy-policy">Privacy Policy</Link>
			<Link to="/terms-of-service">Terms of Service</Link>
		</nav>
	}
}
