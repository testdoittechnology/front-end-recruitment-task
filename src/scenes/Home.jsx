import React from 'react'
import { withStyles } from '@material-ui/core'
import Tr from 'libs/Translations'
import Workspace from '../components/Workspace';
import PersonalDataForm from './components/PersonalDataForm/PersonalDataForm';
import Divider from '../components/Divider';
import EducationForm from './components/EducationForm/EducationForm';
import SkillsForm from './components/SkillsForm/SkillsForm';
import EmploymentSection from './components/EmploymentForm/EmploymentSection';

const style = theme => ({
})

class Home extends React.PureComponent {

	render() {
		return (
			<Workspace title={Tr('home_title')}>
				<Divider title={Tr('personal_data')} />
				<PersonalDataForm />
				
				<EmploymentSection />

				<Divider title={Tr('education_history')} />
				<EducationForm />
				<Divider title={Tr('skills')} />
				<SkillsForm />
			</Workspace>
		)
	}
}

Home.propTypes = {
}


export default withStyles(style)(Home)