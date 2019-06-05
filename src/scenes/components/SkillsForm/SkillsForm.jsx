import React from 'react'
//import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import DoubleColumn from '../../../components/DoubleColumn';
import CreateInputs, { CreateInputsItem } from '../../../libs/CreateInputs';
import Stars from '../../../components/Stars';

const style = theme => ({
})

class SkillsForm extends React.PureComponent {

	render() {
		return (
			<DoubleColumn
				left={CreateInputs([
					CreateInputsItem('skillName', 'skill_name'),
				])}
				right={<Stars id='skillValue' />}
			/>
		)
	}
}

SkillsForm.propTypes = {
}


export default withStyles(style)(SkillsForm)