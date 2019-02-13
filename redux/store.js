import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { initialState } from './initialState'
import reducer from '../reducers'

export function initializeStore (initialState = initialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  )
}
