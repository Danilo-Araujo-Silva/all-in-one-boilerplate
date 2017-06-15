/**
 * Immutable map helper test.
 */

import {Map} from 'immutable'
import {get, set} from './map'

it('can be required without crashing', () => {
	require('./map')
})

it('can set and get a value on a mutable map', () => {
	const map = new Map().asMutable()
	set(map, 'a.b.c.d.e', 1)
	expect(get(map, 'a.b.c.d.e')).toBe(1)
})
