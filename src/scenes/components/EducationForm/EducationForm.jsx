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
import EducationService from '../../../services/EducationService';

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
		EducationService.addNew()
	}

	handleDeleteClick = () => {
		EducationService.delete(this.props.id)
	}

	CreateInputsTab = () => {
		let items = [CreateInputsItem(this.createId('studyDateBegin'), 'date_begin', TextInputType.DATE)]
		if (!this.props.input[this.createId('educationCheckbox')]) {
			items.push(CreateInputsItem(this.createId('studyDateEnd'), 'date_end', TextInputType.DATE))
		}
		return CreateInputs(items)
	}

	render() {
		return (
			<div>
				<DoubleColumn
					left={CreateInputs([
						CreateInputsItem(this.createId('institutionName'), 'institution_name'),
						CreateInputsItem(this.createId('studyField'), 'study_field'),
						CreateInputsItem(this.createId('studyLevel'), 'study_level')
					])}
					right={<div>
						{this.CreateInputsTab()}
						<Checkbox
							id={this.createId('educationCheckbox')}
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