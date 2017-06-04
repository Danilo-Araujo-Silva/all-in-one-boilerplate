import app from 'model/storage/app'

if (typeof app.getIn('redux.reducers.root'.split('.')) === 'undefined') {
	const Map = require('immutable').Map

	const actionTypes = app.getIn('redux.actions.types'.split('.'))

	const reducers = new Map().asMutable()
	reducers.mergeDeep(require('./notifications').default)

	const rootReducer = (currentState = new Map(), {type, payload}) => {
		const actionType = actionTypes.getIn(type.split('.'))

		if (!actionType) {
			return currentState
		}

		const reducer = reducers.getIn(actionType.split('.'))

		if (!reducer) {
			return currentState
		}

		return reducer(currentState, {type, payload})
	}

	reducers.set('root', rootReducer)

	app.setIn('redux.reducers.root'.split('.'), rootReducer)
	app.setIn('redux.reducers.all'.split('.'), reducers.asImmutable())
}

export default app.getIn('redux.reducers.root'.split('.'))

