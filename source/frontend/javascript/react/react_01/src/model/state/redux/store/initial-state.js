import {Map} from 'immutable'

const initialState = new Map().asMutable()

const immutableInitialState = initialState.asImmutable()

export default immutableInitialState
