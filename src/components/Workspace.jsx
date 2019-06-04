import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Grid, Typography } from '@material-ui/core'

const style = theme => ({
	root: {
		width: 1024,
		padding: theme.spacing(2),
		margin: '0 auto',
	},
	title: {
		marginBottom: '1rem'
	}
})

class Workspace extends React.PureComponent {

	render() {
		const { children, title, classes } = this.props;
		return (
			<Grid
				container
				direction='column'
				className={classes.root}
			>
				<Grid item>
					<Typography
						variant='h2'
						color='primary'
						className={classes.title}
					>
						{title}
					</Typography>
				</Grid>
				<Grid item>
					{children}
				</Grid>
			</Grid>
		)
	}
}

Workspace.propTypes = {
	title: PropTypes.string,
	children: PropTypes.any,
}


export default withStyles(style)(Workspace)