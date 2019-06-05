import React from 'react'
//import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import DoubleColumn from '../../../components/DoubleColumn';
import CreateInputs, { CreateInputsItem } from '../../../libs/CreateInputs';
import { TextInputType } from '../../../components/TextInput';
import Checkbox from '../../../components/Checkbox';
import { connect } from 'react-redux'
import Tr from 'libs/Translations'

const style = theme => ({
})

class EducationForm extends React.PureComponent {

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
			<DoubleColumn
				left={CreateInputs([
					CreateInputsItem('institutionName', 'institution_name'),
					CreateInputsItem('studyField', 'study_field'),
					CreateInputsItem('studyLevel', 'study_level')
				])}
				right={
					<div>
						{this.CreateInputsTab()}
						<Checkbox
							id={'educationCheckbox'}
							label={Tr('checkBox_label')
							}
						/>
					</div>
				}
			/>
		)
	}
}

EducationForm.propTypes = {
}


const mapStateToProps = (state) => ({
	input: state.input,
})

const mapDispatchToProps = dispatch => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(EducationForm))