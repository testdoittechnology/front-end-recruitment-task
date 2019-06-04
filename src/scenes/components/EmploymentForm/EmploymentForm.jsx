import React from 'react'
//import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import DoubleColumn from '../../../components/DoubleColumn';
import TextInput from '../../../components/TextInput';
import CreateInputs, { CreateInputsItem } from '../../../libs/CreateInputs';
import Tr from 'libs/Translations'

const style = theme => ({
})

class EmploymentForm extends React.PureComponent {

	render() {
		return (
			<div>
				<DoubleColumn
					left={CreateInputs([
						CreateInputsItem('companyName', 'company_name'),
						CreateInputsItem('companyPosition', 'company_position'),
						CreateInputsItem('pageAddress', 'page_address')
					])}
					right={CreateInputs([
						CreateInputsItem('companyName', 'employment_date_begin'),
						CreateInputsItem('companyPosition', 'employment_date_end')
					])}
				/>
				<TextInput
					id={'description'}
					label={Tr('description')}
					multiline
				/>
			</div>
		)
	}
}

EmploymentForm.propTypes = {
}


export default withStyles(style)(EmploymentForm)