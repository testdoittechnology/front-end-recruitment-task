const initialState = {
}

export default (state = initialState, { type, payload }) => {
	switch (type) {

		case 'SET_STORE_VALUE':
			return {
				...state,
				[payload.id]: payload.value,
			}
		default:
			return state
	}
}
