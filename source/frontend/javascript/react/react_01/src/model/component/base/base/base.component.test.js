/**
 *
 */
import React from 'react'
import ReactDOM from 'react-dom'

import Base from './base.component'

it('can be inherited without crashing', () => {
	class Test extends Base {
		render() {
			return null
		}
	}

	const div = document.createElement('div')
	ReactDOM.render(<Test />, div)
})
