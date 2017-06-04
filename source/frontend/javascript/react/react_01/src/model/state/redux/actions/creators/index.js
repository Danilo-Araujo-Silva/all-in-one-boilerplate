import {isCollection, Map} from 'immutable'

const separator = '.'

const actionTypes = window.store.getIn('redux.action.types'.split(separator))

let actionCreators = new Map().asMutable()

const pushActionCreator = (actionType) => {
	actionCreators.setIn(actionType.split(separator), (payload) => 
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

const immutableActionCreators = actionCreators.asImmutable()

export default immutableActionCreators
