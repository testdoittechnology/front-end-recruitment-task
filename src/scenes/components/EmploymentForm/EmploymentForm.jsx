import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import DoubleColumn from '../../../components/DoubleColumn';
import TextInput, { TextInputType } from '../../../components/TextInput';
import CreateInputs, { CreateInputsItem } from '../../../libs/CreateInputs';
import Tr from 'libs/Translations'

const style = theme => ({
})

class EmploymentForm extends React.PureComponent {

	createId = (id) => `${id}_${this.props.id}`

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
			</div>
		)
	}
}

EmploymentForm.propTypes = {
	id: PropTypes.string,
}


export default withStyles(style)(EmploymentForm)