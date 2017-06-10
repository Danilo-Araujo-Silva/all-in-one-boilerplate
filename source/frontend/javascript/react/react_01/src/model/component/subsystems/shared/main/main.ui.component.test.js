/**
 * Main UI component test.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MainUI from './main.ui.component';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MainUI />, div);
});
