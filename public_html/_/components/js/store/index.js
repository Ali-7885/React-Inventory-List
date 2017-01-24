import C from '../constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {

	let result

	console.groupCollapsed(`dispatching action => ${action.type}`)
	console.log('Item List', store.getState().items.length)
	result = next(action)

	let { items } = store.getState()

	console.log(`
		Items : ${items.length}
	`)

	console.groupEnd()

	return result
}

export default (initialState={}) => {
	return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer, initialState)
}