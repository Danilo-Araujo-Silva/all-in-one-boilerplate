import app from 'model/storage/app'

if (typeof app.getIn('redux.actions.types'.split('.')) === 'undefined') {
	const Map = require('immutable').Map

	let actionTypes = new Map().asMutable()
	let apiSubActionTypes = new Map().asMutable()
	let apiSubActionTypeStatuses = new Map().asMutable()

	const pushActionType = (actionType) => {
		actionTypes.setIn(actionType.split('.'), actionType)
	}

	const pushApiSubActionType = (subActionType) => {
		apiSubActionTypes.set(subActionType, subActionType)
	}

	const pushApiSubActionTypeStatus = (status) => {
		apiSubActionTypeStatuses.set(status, status)
	}

	const pushApiActionType = (mainActionType) => {
		apiSubActionTypes.forEach((apiSubActionType) => {
			apiSubActionTypeStatuses.forEach((apiSubActionTypeStatus) => {
				pushActionType(`${mainActionType}.${apiSubActionType}.${apiSubActionTypeStatus}`)
			})
		})
	}

	pushApiSubActionTypeStatus("start")
	pushApiSubActionTypeStatus("finishWithoutError")
	pushApiSubActionTypeStatus("finishWithError")

	pushApiSubActionType("sanitize")
	pushApiSubActionType("sanitizeAll")
	pushApiSubActionType("validate")
	pushApiSubActionType("validateAll")
	pushApiSubActionType("get")
	pushApiSubActionType("getAll")
	pushApiSubActionType("insert")
	pushApiSubActionType("insertAll")
	pushApiSubActionType("update")
	pushApiSubActionType("updateAll")
	pushApiSubActionType("patch")
	pushApiSubActionType("patchAll")
	pushApiSubActionType("remove")
	pushApiSubActionType("removeAll")
	pushApiSubActionType("delete")
	pushApiSubActionType("deleteAll")

	pushApiActionType("notification.success")
	pushApiActionType("notification.information")
	pushApiActionType("notification.warning")
	pushApiActionType("notification.error")

	pushApiActionType("model.user")

	app.setIn('redux.actions.types'.split('.'), actionTypes.asImmutable())
}

export default app.getIn('redux.actions.types'.split('.'))
