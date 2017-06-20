if (typeof app === 'undefined') {
	let instance = null

	const Map = require('immutable').Map

	class App extends Map {

		constructor() {
			super()

			if(!instance) {
				instance = this
			}

			return instance
		}
	}

	window.app = new App().asMutable()

	window.app.set('session', window.sessionStorage)
	window.app.set('local', window.localStorage)
}

export default window.app
