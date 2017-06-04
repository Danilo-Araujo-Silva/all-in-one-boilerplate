import {Map} from 'immutable'

const separator = '.'

let actionTypes = new Map().asMutable()
let apiSubActionTypes = new Map().asMutable()
let apiSubActionTypeStatuses = new Map().asMutable()

const pushActionType = (actionType) => {
	actionTypes.setIn(actionType.split(separator), actionType)
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
			pushActionType(`${mainActionType}${separator}${apiSubActionType}${separator}${apiSubActionTypeStatus}`)
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

const immutableActionTypes = actionTypes.asImmutable()

export default immutableActionTypes
