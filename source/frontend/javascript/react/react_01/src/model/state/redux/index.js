const separator = '.'

if (typeof window.store.getIn('redux.store'.split(separator)) === 'undefined') {
	window.store.setIn('redux.store'.split(separator), require('model/state/redux/store').default)
	window.store.setIn('redux.action.types'.split(separator), require('model/state/redux/actions/action-types').default)
	window.store.setIn('redux.action.creators'.split(separator), require('model/state/redux/actions/creators').default)
	window.store.setIn('redux.action.bounds'.split(separator), require('model/state/redux/actions/bounds').default)
}
