let global = window || GLOBAL

if (!global.oraculum) {
	let instance = null;

	class Oraculum {
		
		constructor() {
			if (!instance) {
				instance = this
			}
			
			return instance
		}
	}
	
	const oraculum = new Oraculum()
	
	if (typeof GLOBAL !== 'undefined') {
		GLOBAL.oraculum = oraculum
	}
	if (typeof window !== 'undefined') {
		window.oraculum = oraculum
	}
}

export default global.oraculum
