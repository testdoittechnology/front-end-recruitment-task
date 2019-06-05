import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import DoubleColumn from '../../../components/DoubleColumn';
import CreateInputs, { CreateInputsItem } from '../../../libs/CreateInputs';
import { TextInputType } from '../../../components/TextInput';
import ButtonRow, { CreateButtonItem } from '../../../components/ButtonRow';

const style = theme => ({
})

class EducationForm extends React.PureComponent {

	createId = (id) => `${id}_${this.props.id}`

	get buttons() {
		if (this.props.isSingle) {
			return [CreateButtonItem('add_new', this.handleAddNew)]
		}
		let items = [CreateButtonItem('delete', this.handleDeleteClick)]
		if (this.props.isLast) {
			items.push(CreateButtonItem('add_new', this.handleAddNew))
		}
		return items;
	}

	handleAddNew = () => {
		// EmploymentService.addNew();
	}

	handleDeleteClick = () => {
		// EmploymentService.delete(this.props.id);
	}

	render() {
		return (
			<div>
				<DoubleColumn
					left={CreateInputs([
						CreateInputsItem('institutionName', 'institution_name'),
						CreateInputsItem('studyField', 'study_field'),
						CreateInputsItem('studyLevel', 'study_level')
					])}
					right={CreateInputs([
						CreateInputsItem('studyDateBegin', 'date_begin', TextInputType.DATE),
						CreateInputsItem('studyDateEnd', 'date_end', TextInputType.DATE)
					])}
				/>
				<ButtonRow
					buttons={this.buttons}
				/>
			</div>
		)
	}
}

EducationForm.propTypes = {
	id: PropTypes.string,
	isLast: PropTypes.bool,
	isSingle: PropTypes.bool,
}

EducationForm.defaultProps = {
	isLast: false,
	isSingle: false,
}

export default withStyles(style)(EducationForm)