/**
 * Material UI Light test.
 */
it('get exports without crashing', () => {
	expect(require('./material-ui-light.theme')).toBeTruthy()
})