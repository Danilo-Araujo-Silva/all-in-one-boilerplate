/**
 * Footer UI component test.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import FooterUI from './footer.ui.component';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<FooterUI />, div);
})
