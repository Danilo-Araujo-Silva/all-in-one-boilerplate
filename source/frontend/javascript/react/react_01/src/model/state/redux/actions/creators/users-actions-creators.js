import actionTypes from 'model/state/redux/actions/action-types'

export function getUser(payload = null) {
  return {
    type: actionTypes.user.get.run,
    payload: payload
  }
}

export function setUser(payload = null) {
  return {
    type: actionTypes.user.set,
    payload: payload
  }
}

export function searchUser(payload = null) {
  return {
    type: actionTypes.user.search.run,
    payload: payload
  }
}

export function insertUser(payload = null) {
  return {
    type: actionTypes.user.insert.run,
    payload: payload
  }
}

export function patchUser(payload = null) {
  return {
    type: actionTypes.user.patch.run,
    payload: payload
  }
}

export function updateUser(payload = null) {
  return {
    type: actionTypes.user.update.run,
    payload: payload
  }
}

export function deleteUser(payload = null) {
  return {
    type: actionTypes.user.delete.run,
    payload: payload
  }
}

export function getUsers(payload = null) {
  return {
    type: actionTypes.users.get.run,
    payload: payload
  }
}

export function setUsers(payload = null) {
  return {
    type: actionTypes.users.set,
    payload: payload
  }
}

export function searchUsers(payload = null) {
  return {
    type: actionTypes.users.search.run,
    payload: payload
  }
}

export function insertUsers(payload = null) {
  return {
    type: actionTypes.users.insert.run,
    payload: payload
  }
}

export function patchUsers(payload = null) {
  return {
    type: actionTypes.users.patch.run,
    payload: payload
  }
}

export function updateUsers(payload = null) {
  return {
    type: actionTypes.users.update.run,
    payload: payload
  }
}

export function deleteUsers(payload = null) {
  return {
    type: actionTypes.users.delete.run,
    payload: payload
  }
}

const usersActionsCreators = {
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

export default usersActionsCreators
