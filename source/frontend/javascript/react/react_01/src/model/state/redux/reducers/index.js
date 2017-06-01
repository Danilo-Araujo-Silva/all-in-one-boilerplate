//import {combineReducers} from 'redux'
import {Map, List} from 'immutable'

import actionTypes from 'model/state/redux/actions/action-types'

const separator = '.'

export const rootReducer = (currentState = new Map(), {type, payload}) => {
	switch (type) {
		case actionTypes.getIn('notification.success.insert.finishWithoutError'.split(separator)):
			const splited = 'notification.success'.split(separator)
			let next = currentState.asMutable()
			
			let array = currentState.getIn(splited)
			if (!array) {
				array = new List()
			}
			array = array.asMutable()
		
			array.push(payload)
			
			next.setIn(splited, array.asImmutable())
			
			return next.asImmutable()
		default:
			return currentState
	}	
}

export default rootReducer
