import React from 'react'
import { withStyles } from '@material-ui/core'
import Button from '../components/Button';
import Tr from 'libs/Translations'
import Workspace from '../components/Workspace';

const style = theme => ({
})

class Home extends React.PureComponent {

	render() {
		return (
			<Workspace title={Tr('home_title')}>
				<Button>Hello</Button>
			</Workspace>
		)
	}
}

Home.propTypes = {
}


export default withStyles(style)(Home)