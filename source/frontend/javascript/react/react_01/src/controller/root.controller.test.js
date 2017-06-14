/**
 * Root controller test.
 */

it('create a root element and require without crashing', () => {
	const div = document.createElement('div')
	div.setAttribute('id', 'root')
	document.body.appendChild(div)

	require('./root.controller')
})
