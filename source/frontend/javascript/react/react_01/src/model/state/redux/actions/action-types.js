import {Map} from 'immutable'

const separator = '.'

let actions = new Map().asMutable()
let apiSubActions = new Map().asMutable()

const pushAction = (action) => {
	actions.setIn(action.split(separator), action)
}

const pushApiSubAction = (subAction) => {
	apiSubActions.set(subAction, subAction)
}

const pushApiAction = (mainAction) => {
	apiSubActions.forEach((apiSubAction) => {
		pushAction(`${mainAction}${separator}${apiSubAction}`)
	})
}

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

export default immutableActions
