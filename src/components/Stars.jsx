import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Grid, IconButton } from '@material-ui/core'
import { Star } from '@material-ui/icons'
import { connect } from 'react-redux'
import { setInputValue } from '../redux/action';


const style = theme => ({
	icon: {
		fontSize: 24
	}
})

class Stars extends React.Component {

	constructor(props) {
		super(props);
		props.setRedux(props.id, props.value)
	}

	shouldComponentUpdate(newProps, newState) {
		const { id } = this.props;
		const field = this.value;
		const newField = newProps.input[id];
		if (field !== newField) {
			return true;
		}
		return false;
	}

	get value() {
		const { id, input } = this.props;
		return input[id];
	}

	setValue = (value) => () => {
		const { id, setRedux } = this.props;
		setRedux(id, value)
	}

	createStars = () => {
		const { size, classes } = this.props;
		return new Array(size).fill(0).map((x, i) => {
			return <Grid item key={i}>
				<IconButton
					color={i < this.value ? 'primary' : undefined}
					onClick={this.setValue(i+1)}
				>
					<Star className={classes.icon} />
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
	id: PropTypes.string.isRequired,
	size: PropTypes.number,
}

Stars.defaultProps = {
	size: 3,
	value: 2,
}

const mapStateToProps = (state) => ({
	input: state.input
})

const mapDispatchToProps = dispatch => ({
	setRedux: (id, value) => dispatch(setInputValue(id, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Stars))