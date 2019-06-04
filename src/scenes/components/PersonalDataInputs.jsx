import React from 'react'
//import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import TextInput, { TextInputType } from '../../components/TextInput';
import Tr from 'libs/Translations'

const style = theme => ({
})

class PersonalDataInputs extends React.PureComponent {

	render() {
		return [
			<TextInput key={0} id='fullName' label={Tr('full_name')}/>,
			<TextInput key={1} id='email' type={TextInputType.EMAIL} label={Tr('email')} />,
			<TextInput key={2} id='phone' type={TextInputType.NUMBER_POSITIVE} label={Tr('phone')}/>,
		]
	}
}

PersonalDataInputs.propTypes = {
}


export default withStyles(style)(PersonalDataInputs)