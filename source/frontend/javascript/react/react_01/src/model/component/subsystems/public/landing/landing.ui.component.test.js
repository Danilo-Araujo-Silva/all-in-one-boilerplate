/**
 * Landing UI component test.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import LandingUI from './landing.ui.component';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<LandingUI />, div);
})
