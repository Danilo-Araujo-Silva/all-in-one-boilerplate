import app from 'model/storage/app'

if (typeof app.getIn('redux.actions.bounds'.split('.')) === 'undefined') {
	const Map = require('immutable').Map
	const isCollection = require('immutable').isCollection

	const actionTypes = app.getIn('redux.actions.types'.split('.'))
	const actionCreators = app.getIn('redux.actions.creators'.split('.'))
	const store = app.getIn('redux.store'.split('.'))

	let actionBounds = new Map().asMutable()

	const pushActionBound = (actionType) => {
		const splited = actionType.split('.')
		actionBounds.setIn(splited, (payload) => {
			store.dispatch(actionCreators.getIn(splited)(payload))
		})
	}

	const traverseActionTypes = (collection) => {
		collection.forEach((v, k) => {
			if (isCollection(v)) {
				traverseActionTypes(v)
			} else {
				pushActionBound(v)
			}
		})
	}

	traverseActionTypes(actionTypes)

	app.setIn('redux.actions.bounds'.split('.'), actionBounds.asImmutable())
}

export default app.getIn('redux.actions.bounds'.split('.'))
