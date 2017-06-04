if (typeof window.store === 'undefined') {
	let instance = null;

	const Map = require('immutable').Map

	class App extends Map {

		constructor() {
			super();

			if(!instance) {
				instance = this;
			}

			return instance;
		}
	}

	window.store = new App().asMutable()

	window.store.set('session', sessionStorage)
	window.store.set('local', localStorage)
}
