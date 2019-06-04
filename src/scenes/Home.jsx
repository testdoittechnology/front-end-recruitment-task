import React from 'react'
import { withStyles } from '@material-ui/core'
import Tr from 'libs/Translations'
import Workspace from '../components/Workspace';
import PersonalDataForm from './components/PersonalDataForm';
import Divider from '../components/Divider';

const style = theme => ({
})

class Home extends React.PureComponent {

	render() {
		return (
			<Workspace title={Tr('home_title')}>
				<Divider title={Tr('personal_data')} />
				<PersonalDataForm />
			</Workspace>
		)
	}
}

Home.propTypes = {
}


export default withStyles(style)(Home)