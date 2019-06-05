import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import validation from './reducers/validationReducer'
import input from './reducers/inputReducer'
import storeReducer from './reducers/storeReducer'

const store = createStore(
	combineReducers({
		input,
		validation,
		store: storeReducer,
	}),
	composeWithDevTools()
)

export default store;
