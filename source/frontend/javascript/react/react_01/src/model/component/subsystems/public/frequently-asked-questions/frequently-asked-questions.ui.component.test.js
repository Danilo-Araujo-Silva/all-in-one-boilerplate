/**
 * FrequentlyAskedQuestions UI component test.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import reduxStore from 'model/state/redux/store'
import FrequentlyAskedQuestionsUI from './frequently-asked-questions.ui.component'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<Provider store={reduxStore}>
			<BrowserRouter>
				<FrequentlyAskedQuestionsUI />
			</BrowserRouter>
		</Provider>,
		div
	)
})
