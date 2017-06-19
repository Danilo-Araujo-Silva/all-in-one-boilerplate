/**
 * Base UI component test.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import BaseUI from './base.ui.component'

it('can be inherited without crashing', () => {
	class TestUI extends BaseUI {
		render() {
			return null
		}
	}

	const div = document.createElement('div')
	ReactDOM.render(<TestUI />, div)
})
