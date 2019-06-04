import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import validation from './reducers/validationReducer'
import input from './reducers/inputReducer'

const store = createStore(
	combineReducers({
		input,
		validation,
	}),
	composeWithDevTools()
)

export default store;
