const reducer = (state = {
}, { type, payload }) => {
	switch (type) {
		case 'SET_INPUT_VALUE':
			return {
				...state,
				[payload.id]: payload.value,
			}
		case 'CLEAR_INPUT_STORE':
			return {}
		case 'SET_INPUT_GROUP_VALUE':
			return {
				...state,
				[payload.group]: {
					...state[payload.group],
					[payload.id]: payload.value
				},
			}
		default:
			return state
	}
}

export default reducer;