import { combineReducers } from 'redux'
import page from './books'
import user from './authors'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    ...page,...user,
    routing:routerReducer
})