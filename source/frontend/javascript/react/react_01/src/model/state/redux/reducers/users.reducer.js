import {combineReducers} from 'redux'

import statuses from 'model/state/statuses'
import actionTypes from 'model/state/redux/actions/action-types'

const userActionTypes = actionTypes.user
const usersActionTypes = actionTypes.users

export const getUser = (state = false, action) => {
	switch (action.type) {
		case userActionTypes.get.run:
			return {
				status: statuses.running,
				payload: action.payload
			}
		case userActionTypes.get.cancel:
			return {
				status: statuses.idle,
				payload: null
			}
		default:
			return state
	}
}

export const setUser = (state = {}, action) => {
	switch (action.type) {
		case userActionTypes.set:
			return action.payload
		default:
			return state
	}
}

export const searchUser = (state = false, action) => {
	switch (action.type) {
		case userActionTypes.search.run:
			return {
				status: statuses.running,
				payload: action.payload
			}
		case userActionTypes.search.cancel:
			return {
				status: statuses.idle,
				payload: action.payload
			}
		default:
			return state
	}
}

export const insertUser = (state = false, action) => {
	switch (action.type) {
		case userActionTypes.insert.run:
			return {
				status: statuses.running,
				payload: action.payload
			}
		case userActionTypes.insert.cancel:
			return {
				status: statuses.idle,
				payload: action.payload
			}
		default:
			return state
	}
}

export const patchUser = (state = false, action) => {
	switch (action.type) {
		case userActionTypes.patch.run:
			return {
				status: statuses.running,
				payload: action.payload
			}
		case userActionTypes.patch.cancel:
			return {
				status: statuses.idle,
				payload: action.payload
			}
		default:
			return state
	}
}

export const updateUser = (state = false, action) => {
	switch (action.type) {
		case userActionTypes.update.run:
			return {
				status: statuses.running,
				payload: action.payload
			}
		case userActionTypes.update.cancel:
			return {
				status: statuses.idle,
				payload: action.payload
			}
		default:
			return state
	}
}

export const deleteUser = (state = false, action) => {
	switch (action.type) {
		case userActionTypes.delete.run:
			return {
				status: statuses.running,
				payload: action.payload
			}
		case userActionTypes.delete.cancel:
			return {
				running: false,
				payload: action.payload
			}
		default:
			return state
	}
}

export const getUsers = (state = false, action) => {
	switch (action.type) {
		case usersActionTypes.get.run:
			return {
				running: true,
				payload: action.payload
			}
		case usersActionTypes.get.cancel:
			return {
				running: false,
				payload: action.payload
			}
		default:
			return state
	}
}

export const setUsers = (state = {}, action) => {
	switch (action.type) {
		case usersActionTypes.set:
			return action.payload
		default:
			return state
	}
}

export const searchUsers = (state = false, action) => {
	switch (action.type) {
		case usersActionTypes.search.run:
			return {
				running: true,
				payload: action.payload
			}
		case usersActionTypes.search.cancel:
			return {
				running: false,
				payload: action.payload
			}
		default:
			return state
	}
}

export const insertUsers = (state = false, action) => {
	switch (action.type) {
		case usersActionTypes.insert.run:
			return {
				running: true,
				payload: action.payload
			}
		case usersActionTypes.insert.cancel:
			return {
				running: false,
				payload: action.payload
			}
		default:
			return state
	}
}

export const patchUsers = (state = false, action) => {
	switch (action.type) {
		case usersActionTypes.patch.run:
			return {
				running: true,
				payload: action.payload
			}
		case usersActionTypes.patch.cancel:
			return {
				running: false,
				payload: action.payload
			}
		default:
			return state
	}
}

export const updateUsers = (state = false, action) => {
	switch (action.type) {
		case usersActionTypes.update.run:
			return {
				running: true,
				payload: action.payload
			}
		case usersActionTypes.update.cancel:
			return {
				running: false,
				payload: action.payload
			}
		default:
			return state
	}
}

export const deleteUsers = (state = false, action) => {
	switch (action.type) {
		case usersActionTypes.delete.run:
			return {
				running: true,
				payload: action.payload
			}
		case usersActionTypes.delete.cancel:
			return {
				running: false,
				payload: action.payload
			}
		default:
			return state
	}
}

const usersReducer = {
	user: combineReducers({
		target: setUser,
		get: getUser,
		search: searchUser,
		insert: insertUser,
		patch: patchUser,
		update: updateUser,
		delete: deleteUser
	}),
	users: combineReducers({
		target: setUsers,
		get: getUsers,
		search: searchUsers,
		insert: insertUsers,
		patch: patchUsers,
		update: updateUsers,
		delete: deleteUsers
	})
}

export default usersReducer
