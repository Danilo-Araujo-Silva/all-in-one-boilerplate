import store from 'model/state/redux/store'
import actionCreators from 'model/state/redux/actions/creators'

const dispatch = store.dispatch

export function getUser(payload = null) {
  dispatch(actionCreators.getUser(payload))
}

export function setUser(payload = null) {
	dispatch(actionCreators.setUser(payload))
}

export function searchUser(payload = null) {
	dispatch(actionCreators.searchUser(payload))
}

export function insertUser(payload = null) {
	dispatch(actionCreators.insertUser(payload))
}

export function patchUser(payload = null) {
	dispatch(actionCreators.patchUser(payload))
}

export function updateUser(payload = null) {
	dispatch(actionCreators.updateUser(payload))
}

export function deleteUser(payload = null) {
	dispatch(actionCreators.deleteUser(payload))
}

export function getUsers(payload = null) {
	dispatch(actionCreators.getUsers(payload))
}

export function setUsers(payload = null) {
	dispatch(actionCreators.setUsers(payload))
}

export function searchUsers(payload = null) {
	dispatch(actionCreators.searchUsers(payload))
}

export function insertUsers(payload = null) {
	dispatch(actionCreators.insertUsers(payload))
}

export function patchUsers(payload = null) {
	dispatch(actionCreators.patchUsers(payload))
}

export function updateUsers(payload = null) {
	dispatch(actionCreators.updateUsers(payload))
}

export function deleteUsers(payload = null) {
	dispatch(actionCreators.deleteUsers(payload))
}

const usersActionsBounds = {
	setUser,
	getUser,
	searchUser,
	insertUser,
	patchUser,
	updateUser,
	deleteUser,
	setUsers,
	getUsers,
	searchUsers,
	insertUsers,
	patchUsers,
	updateUsers,
	deleteUsers
}

export default usersActionsBounds
