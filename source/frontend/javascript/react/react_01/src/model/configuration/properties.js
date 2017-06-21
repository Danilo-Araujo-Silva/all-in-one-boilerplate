/**
 * System properties.
 */
import {Map} from 'immutable'

import {get, set} from 'model/helper/immutable/map'
import app from 'model/storage/app'

let properties = get(app, 'properties')

if (typeof properties === 'undefined') {
	properties = new Map().asMutable()
	set(app, 'properties', properties)
	set(properties, 'application.abbreviation', 'AllInOne')
	set(properties, 'application.title', 'All in One')
	set(properties, 'application.shortDescription', 'All in One Boilerplate')
	set(properties, 'application.description', 'All in One Boilerplate')
}

export default properties
