/**
 * Main component test.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import Main from './main.component'

it('can be inherited without crashing', () => {
	class Test extends Main {
		render() {
			return null
		}
	}

	const div = document.createElement('div')
	ReactDOM.render(<Test />, div)
});
