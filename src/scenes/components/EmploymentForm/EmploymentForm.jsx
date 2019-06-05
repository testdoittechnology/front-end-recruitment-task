import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import DoubleColumn from '../../../components/DoubleColumn';
import TextInput, { TextInputType } from '../../../components/TextInput';
import CreateInputs, { CreateInputsItem } from '../../../libs/CreateInputs';
import Tr from 'libs/Translations'
import ButtonRow, { CreateButtonItem } from '../../../components/ButtonRow';

const style = theme => ({
})

class EmploymentForm extends React.PureComponent {

	createId = (id) => `${id}_${this.props.id}`

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

	}

	handleDeleteClick = () => {

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
					right={CreateInputs([
						CreateInputsItem(this.createId('companyName'), 'employment_date_begin', TextInputType.DATE),
						CreateInputsItem(this.createId('companyPosition'), 'employment_date_end', TextInputType.DATE)
					])}
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

EmploymentForm.defaultProps = {
	isLast: false,
	isSingle: false,
}

export default withStyles(style)(EmploymentForm)