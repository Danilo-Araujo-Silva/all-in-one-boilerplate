import {isCollection, Map} from 'immutable'

const separator = '.'

const actionTypes = window.store.getIn('redux.action.types'.split(separator))
const actionCreators = window.store.getIn('redux.action.creators'.split(separator))
const store = window.store.getIn('redux.store'.split(separator))

let actionBounds = new Map().asMutable()

const pushActionBound = (actionType) => {
	const splited = actionType.split(separator)
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

const immutableActionBounds = actionBounds.asImmutable()

export default immutableActionBounds
