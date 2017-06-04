import app from 'model/storage/app'

if (typeof app.getIn('redux.actions.creators'.split('.')) === 'undefined') {
	const Map = require('immutable').Map
	const isCollection = require('immutable').isCollection

	const actionTypes = app.getIn('redux.actions.types'.split('.'))

	let actionCreators = new Map().asMutable()

	const pushActionCreator = (actionType) => {
		actionCreators.setIn(actionType.split('.'), (payload) =>
			({
				type: actionType,
				payload
			})
		)
	}

	const traverseActionTypes = (collection) => {
		collection.forEach((v, k) => {
			if (isCollection(v)) {
				traverseActionTypes(v)
			} else {
				pushActionCreator(v)
			}
		})
	}

	traverseActionTypes(actionTypes)

	app.setIn('redux.actions.creators'.split('.'), actionCreators.asImmutable())
}

export default app.getIn('redux.actions.creators'.split('.'))
