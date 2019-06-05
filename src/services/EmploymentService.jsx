import reduxStore from '../redux/store'
import { setStoreValue, setInputValue } from '../redux/action';

class EmploymentService {

	keys = [
		'companyName',
		'companyPosition',
		'pageAddress',
		'description',
		'employmentDateBegin',
		'employmentDateEnd',
		'employmentCheckbox',
	]

	delete = id => {
		const { input, store } = reduxStore.getState();
		const size = store.employmentFormSize;
		
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
			'employmentFormSize',
			store.employmentFormSize - 1
		))
	}

	addNew = () => {
		const { store } = reduxStore.getState();
		reduxStore.dispatch(setStoreValue(
			'employmentFormSize',
			store.employmentFormSize + 1
		))
	}


}

export default new EmploymentService();