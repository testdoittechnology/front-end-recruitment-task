import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Grid } from '@material-ui/core'

const style = theme => ({
	root: {
		height: '100%'
	},
	item: {
		width: `calc(50% - ${theme.spacing(2)}px)`
	}
})

class DoubleColumn extends React.PureComponent {

	render() {
		const { classes, left, right } = this.props;

		return (
			<Grid
				className={classes.root}
				container
				justify='space-between'
			>
				<Grid item className={classes.item}>
					{left}
				</Grid>
				<Grid item className={classes.item}>
					{right}
				</Grid>
			</Grid>
		)
	}
}

DoubleColumn.propTypes = {
	left: PropTypes.any,
	right: PropTypes.any,
}


export default withStyles(style)(DoubleColumn)