/**
 * Tasks test.
 */
it('import without crash', () => {
	require('model/state/redux')
	require('./tasks')
})
