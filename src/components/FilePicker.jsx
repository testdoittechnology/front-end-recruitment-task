import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setInputValue } from "../redux/action";
import Button from './Button';

class FilePicker extends React.Component {
	constructor(props) {
		super(props);
		this.__onClick = props.buttonProps.onClick;
	}

	get __props() {
		return {
			...this.props.buttonProps,
			onClick: this.myClick,
		}
	}

	myClick = () => {
		document.getElementById(this.props.id).click();
		if (this.__onClick) {
			this.__onClick();
		}
	}

	fileChanged = (e) => {
		const file = e.target.files[0];
		this.props.setInputValue(this.props.id, file)
		if (this.props.onChange) {
			this.props.onChange(file)
		}
	}

	clearFile = (e) => {
		e.target.value = null
	}

	createInputField = () => {
		return (
			<input
				type="file"
				style={{ display: 'none' }}
				id={this.props.id}
				onChange={this.fileChanged}
				onClick={this.clearFile}
				accept={this.props.accept}
			/>
		)
	}

	render() {
		return (
			<div>
				<Button {...this.__props} />
				{this.createInputField()}
			</div>
		)
	}
}

FilePicker.propTypes = {
	component: PropTypes.func,
	buttonProps: PropTypes.object,
	accept: PropTypes.string,
	id: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	defaultValue: PropTypes.any,
}

FilePicker.defaultProps = {
	props: {}
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
	setInputValue: (id, value) => { dispatch(setInputValue(id, value)); },
})


export default connect(mapStateToProps, mapDispatchToProps)(FilePicker)
