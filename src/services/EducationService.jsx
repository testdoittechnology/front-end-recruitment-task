import BaseService from './BaseService';

class EmploymentService extends BaseService {

	keys = [
		'institutionName',
		'studyField',
		'studyLevel',
		'educationCheckbox',
		'studyDateBegin',
		'studyDateEnd',
	]

	delete(id) {
		super.delete('employmentEducationFormSize', id)
	}

	addNew() {
		super.addNew('employmentEducationFormSize')
	}


}

export default new EmploymentService();