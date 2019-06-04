import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Grid, IconButton } from '@material-ui/core'
import { Star } from '@material-ui/icons'

const style = theme => ({
	icon: {
		fontSize: 24
	}
})

class Stars extends React.PureComponent {

	createStars = () => {
		const { size, classes, value } = this.props;
		return new Array(size).fill(0).map( (x,i) => {
			return <Grid item key={i}>
				<IconButton color={i < value ? 'primary' : undefined}>
					<Star className={classes.icon}/>
				</IconButton>
			</Grid>
		})
	}

	render() {
		return (
			<Grid
				container
			>
				{this.createStars()}
			</Grid>
		)
	}
}

Stars.propTypes = {
	size: PropTypes.number,
	
}

Stars.defaultProps = {
	size: 3,
	value: 2,
}


export default withStyles(style)(Stars)