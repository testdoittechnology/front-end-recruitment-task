import BaseService from './BaseService';

class EmploymentService extends BaseService {

	keys = [
		'companyName',
		'companyPosition',
		'pageAddress',
		'description',
		'employmentDateBegin',
		'employmentDateEnd',
		'employmentCheckbox',
	]

	delete(id) {
		super.delete('employmentFormSize', id)
	}

	addNew() {
		super.addNew('employmentFormSize')
	}


}

export default new EmploymentService();