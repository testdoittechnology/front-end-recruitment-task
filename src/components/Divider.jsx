import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Divider as DividerUI, Typography } from '@material-ui/core'

const style = theme => ({
	root: {
		margin: `${theme.spacing(2)}px 0`
	},
	divider: {
		backgroundColor: theme.palette.primary.light,
		height: 2
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
				<DividerUI className={classes.divider} />
			</div>
		)
	}
}

Divider.propTypes = {
	title: PropTypes.string,
}


export default withStyles(style)(Divider)