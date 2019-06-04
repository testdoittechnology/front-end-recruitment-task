const reducer = (state = {
	error: {},
	valid: {},
}, action) => {
	switch (action.type) {
		case 'SET_VALIDATION_VALUE':
			return {
				error: state.error,
				valid: {
					...state.valid,
					[action.payload.id]: action.payload.value,
				}
			}
		case 'SET_ERROR_VALUE':
			return {
				valid: state.valid,
				error: {
					...state.error,
					[action.payload.id]: action.payload.value,
				}
			}
		case 'SET_ERROR_OBJECT':
			return {
				valid: state.valid,
				error: {
					...state.error,
					...action.payload,
				}
			}
		default:
			return state
	}
}

export default reducer;