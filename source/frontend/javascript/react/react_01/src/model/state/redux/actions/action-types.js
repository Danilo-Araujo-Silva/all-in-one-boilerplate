import {Map} from 'immutable'

const separator = '.'

let actions = new Map().asMutable()
let apiSubActions = new Map().asMutable()
let apiSubActionStatuses = new Map().asMutable()

const pushAction = (action) => {
	actions.setIn(action.split(separator), action)
}

const pushApiSubAction = (subAction) => {
	apiSubActions.set(subAction, subAction)
}

const pushApiSubActionStatus = (status) => {
	apiSubActionStatuses.set(status, status)
}

const pushApiAction = (mainAction) => {
	apiSubActions.forEach((apiSubAction) => {
		apiSubActionStatuses.forEach((apiSubActionStatus) => {
			pushAction(`${mainAction}${separator}${apiSubAction}${separator}${apiSubActionStatus}`)
		})
	})
}

pushApiSubActionStatus("start")
pushApiSubActionStatus("finishWithoutError")
pushApiSubActionStatus("finishWithError")

pushApiSubAction("sanitize")
pushApiSubAction("sanitizeAll")
pushApiSubAction("validate")
pushApiSubAction("validateAll")
pushApiSubAction("get")
pushApiSubAction("getAll")
pushApiSubAction("insert")
pushApiSubAction("insertAll")
pushApiSubAction("update")
pushApiSubAction("updateAll")
pushApiSubAction("patch")
pushApiSubAction("patchAll")
pushApiSubAction("remove")
pushApiSubAction("removeAll")
pushApiSubAction("delete")
pushApiSubAction("deleteAll")

pushApiAction("notification.success")
pushApiAction("notification.information")
pushApiAction("notification.warning")
pushApiAction("notification.error")

pushApiAction("model.user")

const immutableActions = actions.asImmutable()

console.log(immutableActions.toJS())

export default immutableActions
