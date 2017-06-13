/**
 * Main UI component test.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import MainUI from './main.ui.component'

it('can be inherited without crashing', () => {
	class TestUI extends MainUI {
		render() {
			return null
		}
	}

	const div = document.createElement('div')
	ReactDOM.render(<TestUI />, div)
});
