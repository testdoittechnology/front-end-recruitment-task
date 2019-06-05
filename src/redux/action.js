
export function setInputValue(id, value) {
	return {
		type: 'SET_INPUT_VALUE',
		payload: {
			id, value
		}
	}
}

export function clearInputStore(){
	return {
		type: 'CLEAR_INPUT_STORE',
	}
}

export function setErrorValue(id, value) {
	return {
		type: 'SET_ERROR_VALUE',
		payload: {
			id, value
		}
	}
}

export function setErrorObject(object) {
	return {
		type: 'SET_ERROR_OBJECT',
		payload: object,
	}
}


export function setValidationValue(id, value) {
	return {
		type: 'SET_VALIDATION_VALUE',
		payload: {
			id, value
		}
	}
}

export function setInputClearFunc(id, func) {
	return {
		type: 'SET_INPUT_CLEAR_FUNC',
		payload: {
			id, func
		}
	}
}

export function setStoreValue(id,value) {
	return {
		type: 'SET_STORE_VALUE',
		payload: { id, value }
	}
}

export function setInputGroupValue(group, id, value) {
	return {
		type: 'SET_INPUT_GROUP_VALUE',
		payload: {
			id, value, group
		}
	}
}