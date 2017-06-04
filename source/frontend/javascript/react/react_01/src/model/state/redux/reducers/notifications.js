import {Map, List} from 'immutable'

import app from 'model/storage/app'

const reducers = new Map().asMutable()

const actionTypes = app.getIn('redux.actions.types'.split('.'))

reducers.setIn(
	actionTypes.getIn('notification.success.insert.finishWithoutError'.split('.')).split('.'),
	(currentState = new Map(), {type, payload}) => {
		const splited = 'notification.success'.split('.')
		let next = currentState.asMutable()

		let array = currentState.getIn(splited)
		if (!array) {
			array = new List()
		}
		array = array.asMutable()

		array.push(payload)

		next.setIn(splited, array.asImmutable())

		return next.asImmutable()
	}
)

export default reducers
