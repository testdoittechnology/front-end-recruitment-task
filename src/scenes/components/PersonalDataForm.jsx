import React from 'react'
//import PropTypes from 'prop-types'
import { withStyles, Grid } from '@material-ui/core'
import PersonalDataInputs from './PersonalDataInputs';

const style = theme => ({
	item: {
		width: `calc(50% - ${theme.spacing(2)}px)`
	}
})

class PersonalDataForm extends React.PureComponent {

	render() {
		const { classes } = this.props;

		return (
			<Grid
				container
				justify='space-between'
			>
				<Grid item className={classes.item}>
					<PersonalDataInputs />
				</Grid>
				<Grid item className={classes.item}>
					<div style={{ width: '100%', height: '100%', backgroundColor: 'red' }}>

					</div>
				</Grid>
			</Grid>
		)
	}
}

PersonalDataForm.propTypes = {
}


export default withStyles(style)(PersonalDataForm)