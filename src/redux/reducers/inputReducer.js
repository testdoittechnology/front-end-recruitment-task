const reducer = (state = {
}, {type, payload}) => {
	switch (type) {
		case 'SET_INPUT_VALUE':
			return {
				...state,
				[payload.id]: payload.value,
			}
		case 'CLEAR_INPUT_STORE':
			return {}
		default:
			return state
	}
}

export default reducer;