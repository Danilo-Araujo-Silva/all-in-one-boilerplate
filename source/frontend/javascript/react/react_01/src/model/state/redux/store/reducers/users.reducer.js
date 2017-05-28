import {combineReducers} from 'redux'

import actionTypes from './../../action-types'

export const fetching = (state = false, action) => {
	switch (action.type) {
		case actionTypes.users.fetching:
			return true
		case actionTypes.users.cancelFetching:
			return false
		default: 
			return state
	}
}

const usersReducer = combineReducers({
  fetching
})

export default usersReducer
