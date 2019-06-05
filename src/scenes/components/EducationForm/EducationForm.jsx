import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import DoubleColumn from '../../../components/DoubleColumn';
import CreateInputs, { CreateInputsItem } from '../../../libs/CreateInputs';
import { TextInputType } from '../../../components/TextInput';
import ButtonRow, { CreateButtonItem } from '../../../components/ButtonRow';
import Checkbox from '../../../components/Checkbox';
import { connect } from 'react-redux'
import Tr from 'libs/Translations'

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

	CreateInputsTab = () => {
		if (!this.props.input['educationCheckbox']) {
			return (
				CreateInputs([
					CreateInputsItem('studyDateBegin', 'date_begin', TextInputType.DATE),
					CreateInputsItem('studyDateEnd', 'date_end', TextInputType.DATE)
				])
			)
		} else {
			return (
				CreateInputs([
					CreateInputsItem('studyDateBegin', 'date_begin', TextInputType.DATE),
				])
			)
		}
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
					right={<div>
						{this.CreateInputsTab()}
						<Checkbox
							id={'educationCheckbox'}
							label={Tr('checkBox_label')
							}
						/>
					</div>}
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

const mapStateToProps = (state) => ({
	input: state.input,
})

const mapDispatchToProps = dispatch => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(EducationForm))