import React from 'react'
import { withStyles } from '@material-ui/core'
import Button from '../components/Button';
import Tr from 'libs/Translations'
import Workspace from '../components/Workspace';
import TextInput from '../components/TextInput';

const style = theme => ({
})

class Home extends React.PureComponent {

	render() {
		return (
			<Workspace title={Tr('home_title')}>
				<Button>Hello</Button>
				<TextInput id='test' label='TEST'/>
			</Workspace>
		)
	}
}

Home.propTypes = {
}


export default withStyles(style)(Home)