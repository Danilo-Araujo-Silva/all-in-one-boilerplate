import storeFactory from './store'
import initialState from './store/initial-state'
import subscribers from './store/subscribers'

const store = storeFactory(initialState)

for (let value of Object.values(subscribers)) {
	store.subscribe(value(store))
}

window.store = store

export default store
