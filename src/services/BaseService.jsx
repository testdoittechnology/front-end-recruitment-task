import reduxStore from '../redux/store'
import { setStoreValue, setInputValue } from '../redux/action';

class BaseService {

	delete(counterId, id) {
		const { input, store } = reduxStore.getState();
		const size = store[counterId];
		
		if( ''+(size - 1) > id ){
			for(let i = parseInt(id); i < size; i++){
				for(let key in this.keys){
					let keyId = `${this.keys[key]}_${i}`
					let keyIdNext = `${this.keys[key]}_${i+1}`
					reduxStore.dispatch(setInputValue(
						keyId,
						input[keyIdNext]
					))
				}
			}
		}

		reduxStore.dispatch(setStoreValue(
			counterId,
			store[counterId] - 1
		))
	}

	addNew (counterId) {
		const { store } = reduxStore.getState();
		reduxStore.dispatch(setStoreValue(
			counterId,
			store[counterId] + 1
		))
	}


}

export default BaseService;