import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { connect } from 'react-redux'

const style = theme => ({
	root: {
		objectFit: 'contain',
		width: '100%',
		height: '100%',
	}
})

class Picture extends React.Component {

	get _src() {
		if(this._file){
			return window.URL.createObjectURL(this._file);
		}
		return '';
	}

	get _file() {
		const { id, input } = this.props;
		return input[id];
	}

	shouldComponentUpdate(newProps, newState){
		//check is file changed
		const { id } = this.props;
		const file = this._file;
		const newFile = newProps.input[id];
		if(file !== newFile){
			return true;
		}
		return false;
	}

	render() {
		const { classes } = this.props;
		return (
			<img
				className={classes.root}
				src={this._src}
				alt=''
			/>
		)
	}
}

Picture.propTypes = {
	id: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
	input: state.input,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(style)(Picture))