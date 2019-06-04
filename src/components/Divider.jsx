import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Divider as DividerUI, Typography } from '@material-ui/core'

const style = theme => ({
	root: {
		// marginBottom: theme.spacing(2)
	}
})

class Divider extends React.PureComponent {

	render() {
		const { classes, title } = this.props;
		return (
			<div className={classes.root}>
				<Typography variant='h4'>
					{title}
				</Typography>
				<DividerUI />
			</div>
		)
	}
}

Divider.propTypes = {
	title: PropTypes.string,
}


export default withStyles(style)(Divider)