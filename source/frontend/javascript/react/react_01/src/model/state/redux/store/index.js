import storeFactory from './store.factory'
import initialState from './initial-state'
import subscribers from './subscribers'

const store = storeFactory(initialState)

for (let value of Object.values(subscribers)) {
	store.subscribe(value(store))
}

window.store = store

export default store
