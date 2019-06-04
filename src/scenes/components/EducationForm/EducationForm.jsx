import React from 'react'
//import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import DoubleColumn from '../../../components/DoubleColumn';
import CreateInputs, { CreateInputsItem } from '../../../libs/CreateInputs';

const style = theme => ({
})

class EducationForm extends React.PureComponent {

	render() {
		return (
			<DoubleColumn
				left={CreateInputs([
					CreateInputsItem('institutionName', 'institution_name'),
					CreateInputsItem('studyField', 'study_field'),
					CreateInputsItem('studyLevel', 'study_level')
				])}
				right={CreateInputs([
					CreateInputsItem('studyDateBegin', 'date_begin'),
					CreateInputsItem('studyDateEnd', 'date_end')
				])}
			/>
		)
	}
}

EducationForm.propTypes = {
}


export default withStyles(style)(EducationForm)