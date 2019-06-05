import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import DoubleColumn from '../../../components/DoubleColumn';
import TextInput, { TextInputType } from '../../../components/TextInput';
import CreateInputs, { CreateInputsItem } from '../../../libs/CreateInputs';
import Tr from 'libs/Translations'
import Checkbox from '../../../components/Checkbox';
import { connect } from 'react-redux'
import ButtonRow, { CreateButtonItem } from '../../../components/ButtonRow';
import EmploymentService from '../../../services/EmploymentService';

const style = theme => ({
})

class EmploymentForm extends React.PureComponent {

	createId = (id) => `${id}_${this.props.id}`

	CreateInputsTab = () => {
		if (!this.props.input[this.createId('employmentCheckbox')]) {
			return (
				CreateInputs([
					CreateInputsItem(this.createId('employmentDateBegin'), 'employment_date_begin', TextInputType.DATE),
					CreateInputsItem(this.createId('employmentDateEnd'), 'employment_date_end', TextInputType.DATE)
				])
			)
		} else {
			return (
				CreateInputs([
					CreateInputsItem(this.createId('employmentDateBegin'), 'employment_date_begin', TextInputType.DATE),
				])
			)
		}
	}

	get buttons(){
		if (this.props.isSingle){
			return [CreateButtonItem('add_new', this.handleAddNew)]
		}
		let items = [CreateButtonItem('delete', this.handleDeleteClick)]
		if(this.props.isLast){
			items.push(CreateButtonItem('add_new', this.handleAddNew))
		}
		return items;
	}

	handleAddNew = () => {
		EmploymentService.addNew();
	}

	handleDeleteClick = () => {
		EmploymentService.delete(this.props.id);
	}


	render() {
		return (
			<div>
				<DoubleColumn
					left={CreateInputs([
						CreateInputsItem(this.createId('companyName'), 'company_name'),
						CreateInputsItem(this.createId('companyPosition'), 'company_position'),
						CreateInputsItem(this.createId('pageAddress'), 'page_address')
					])}
					right={
						<div>
							{this.CreateInputsTab()}
							<Checkbox
								id={this.createId('employmentCheckbox')}
								label={Tr('checkBox_label')
								}
							/>
						</div>
					}
				/>
				<TextInput
					id={this.createId('description')}
					label={Tr('description')}
					multiline
				/>
				<ButtonRow
					buttons={this.buttons}
				/>
			</div>
		)
	}
}

EmploymentForm.propTypes = {
	id: PropTypes.string,
	isLast: PropTypes.bool,
	isSingle: PropTypes.bool,
}

const mapStateToProps = (state) => ({
	input: state.input,
})

const mapDispatchToProps = dispatch => ({
})

EmploymentForm.defaultProps = {
	isLast: false,
	isSingle: false,
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(EmploymentForm))