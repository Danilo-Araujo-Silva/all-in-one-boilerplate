import {isCollection, Map} from 'immutable'

import actionTypes from 'model/state/redux/actions/action-types'
import actionCreators from 'model/state/redux/actions/creators'
import store from 'model/state/redux/store'

const separator = '.'

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

window.bounds = immutableActionBounds

console.log(immutableActionBounds.toJS())

export default immutableActionBounds
