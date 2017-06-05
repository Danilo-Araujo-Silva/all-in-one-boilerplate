import {List} from 'immutable'

import {get, set} from 'model/helper/immutablejs-map'
import {pushStack} from 'model/state/redux/stack/methods'

pushStack('notification.success.insert', (currentState, payload) => {
	const stateKey = 'notification.success'
	let next = currentState.asMutable()

	let array = get(currentState, stateKey)
	if (!array) {
		array = new List()
	}
	array = array.asMutable()

	array.push(payload)

	set(next, stateKey, array.asImmutable())

	return next.asImmutable()
})
