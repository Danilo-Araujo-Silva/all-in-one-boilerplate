import statuses from 'model/state/statuses'

const initialState = {
	notifications: {
		successes: [],
		informations: [],
		warnings: [],
		errors: [],
		tasksRunning: {
			visible: 0,
			invisible: 0
		}
	},
	user: {
		item: {
			status: statuses.idle,
			action: null,
			payload: null
		},
		list: {
			status: statuses.idle,
			action: null,
			payload: null
		},
	},
}

export default initialState
