import React from 'react'
import { withStyles } from '@material-ui/core'
import DoubleColumn from '../../../components/DoubleColumn';
import CreateInputs, { CreateInputsItem } from '../../../libs/CreateInputs';
import { TextInputType } from '../../../components/TextInput';
import PictureForm from './PictureForm';

const style = theme => ({
})

class PersonalDataForm extends React.PureComponent {

	render() {
		return (
			<DoubleColumn
				left={CreateInputs([
					CreateInputsItem('fullName', 'full_name'),
					CreateInputsItem('email', 'email', TextInputType.EMAIL),
					CreateInputsItem('phone', 'phone', TextInputType.NUMBER_POSITIVE)
				])}
				right={<PictureForm />}
			/>
		)
	}
}

PersonalDataForm.propTypes = {
}


export default withStyles(style)(PersonalDataForm)