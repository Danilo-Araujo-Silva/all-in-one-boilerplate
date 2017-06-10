/**
 * Header UI component test.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import HeaderUI from './header.ui.component';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<HeaderUI />, div);
});
