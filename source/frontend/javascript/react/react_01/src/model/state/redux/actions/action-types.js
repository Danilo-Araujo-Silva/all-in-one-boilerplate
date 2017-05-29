const actionTypes = {
	notification: {
		success: {
			get, getAll, insert, 
			sanitize, sanitizeAll, validate, validateAll
			set, setAll, get, getAll, findFirst, findAll, filter, insert, insertAll, patch, patchAll, update, updateAll, remove, removeAll, delete, deleteAll
		},
		information: {
			
		},
		warning: {
			
		},
		error: {
			
		}
	},
	user: {
		get: {
			run: 'user.get.run',
			cancel: 'user.get.cancel'
		},
		set: 'user.set',
		search: {
			run: 'user.search.run',
			cancel: 'user.search.cancel'
		},
		insert: {
			run: 'user.insert.run',
			cancel: 'user.insert.cancel'
		},
		patch: {
			run: 'user.patch.run',
			cancel: 'user.patch.cancel'
		},
		update: {
			run: 'user.update.run',
			cancel: 'user.update.cancel'
		},
		delete: {
			run: 'user.delete.run',
			cancel: 'user.delete.cancel'
		},
	},users: {
		get: {
			run: 'users.get.run',
			cancel: 'users.get.cancel'
		},
		set: 'users.set',
		search: {
			run: 'users.search.run',
			cancel: 'users.search.cancel'
		},
		insert: {
			run: 'users.insert.run',
			cancel: 'users.insert.cancel'
		},
		patch: {
			run: 'users.patch.run',
			cancel: 'users.patch.cancel'
		},
		update: {
			run: 'users.update.run',
			cancel: 'users.update.cancel'
		},
		delete: {
			run: 'users.delete.run',
			cancel: 'users.delete.cancel'
		},
	}
}

export default actionTypes
