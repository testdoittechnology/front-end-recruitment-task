import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, TextField, InputBase } from '@material-ui/core'
import { connect } from 'react-redux'
import { setInputValue, setErrorValue, setValidationValue, setInputClearFunc } from '../redux/action'

export const TextInputType = {
	TEXT: 0,
	NUMBER: 1,
	EMAIL: 2,
	PASSWORD: 3,
	NOT_EMPTY: 4,
	NUMBER_POSITIVE: 5,
	DATE: 6
}

const style = theme => ({
	root: {
		marginBottom: theme.spacing(1)
	}
})

const mailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

class TextInput extends React.PureComponent {

	state = {
		value: '',
	}

	_isValue(value) {
		return value !== undefined
			&& value !== null
	}

	init() {
		const { defaultValue, id } = this.props;
		this.setState({
			value: this._isValue(defaultValue) ? '' + defaultValue : '',
		}, () => {
			this.validChange(this.state.value)()

			this.props.setRedux(id, this.state.value)
			this.props.setError(id, false)
			this.props.setClearFunc(id, this.clearInput)
		})
	}

	componentDidMount() {
		this.init();
	}

	componentDidUpdate(prevProps, prevState) {
		const { id } = this.props;
		if (prevProps.input[id] !== this.props.input[id]){
			console.log(prevProps.input[id], this.props.input[id])
			this.setValue(this.props.input[id] ? this.props.input[id] : '')
		}
		if (prevProps.defaultValue !== this.props.defaultValue) {
			this.init();
		}
	}

	handleChange = event => {
		let value = event.target.value;
		const { props } = this;

		if (!props.unlimited) {
			if (value.length > props.limit) return;
		}
		if (props.type === TextInputType.NUMBER || props.type === TextInputType.NUMBER_POSITIVE) {
			if (
				value.trim().length > 0 &&
				(/^[-+]?[0-9]*[.,]?[0-9]*$/).exec(value) === null
			) return;
		}
		if (props.type === TextInputType.EMAIL) {
			value = value.toLowerCase();
		}

		if (value === "") this.setValid(false)

		this.setValue(value);

	}

	clearInput = () => {
		this.setValue('');
	}

	setValue = value => {
		this.setState({
			value,
		}, this.validChange(value))
		this.props.setRedux(this.props.id, value)
	}

	validChange = value => () => {
		if(this.props.noValid) {
			this.setValid(true);
			return;
		};
		
		let valid = true;
		switch (this.props.type) {
			case TextInputType.EMAIL:
				this.setValid(mailRegex.test(value.toLowerCase()) && value !== '');
				break;
			case TextInputType.NUMBER_POSITIVE:

				if (parseInt(value) < 0) {
					valid = false;
				}
			// eslint-disable-next-line
			case TextInputType.PASSWORD:
			case TextInputType.NOT_EMPTY:
			case TextInputType.DATE:
			case TextInputType.NUMBER:
				const isEmpty = value.length === 0 || !value.trim()
				this.setValid(!isEmpty && valid);
				break;
			default: this.setValid(true)
				break;
		}
	}

	setValid(value) {
		const { state, props } = this;
		if (state.isValid !== value) {
			this.setState({
				...state,
				isValid: value
			});
			props.setValid(props.id, value)
		}
	}

	getType = () => {
		switch (this.props.type) {
			case TextInputType.PASSWORD: return 'password';
			case TextInputType.NUMBER: return 'number';
			case TextInputType.EMAIL: return 'email';
			case TextInputType.DATE: return 'date';
			case TextInputType.TEXT:
			default: return 'text'
		}
	}

	render() {
		const { props, state } = this;
		const { classes } = this.props;
		const inputProps = {
			fullWidth: true,
			id: props.id,
			label: props.label,
			className: `${classes.root} ${props.className}`,
			value: state.value,
			onChange: this.handleChange,
			required: props.required,
			type: this.getType(),
			multiline: props.multiline,
			error: props.errorRedux[props.id],
			placeholder: props.placeholder,
			variant: props.variant,
			InputProps: {
				endAdornment: props.endAdornment
			},
			onKeyUp: props.onKeyUp,
			InputLabelProps:{
				shrink: props.shrink,
			}
		}

		return React.createElement(
			props.base ? InputBase : TextField,
			inputProps
		)
	}
}

TextInput.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	className: PropTypes.string,
	required: PropTypes.bool,
	type: PropTypes.number,
	limit: PropTypes.number,
	unlimited: PropTypes.bool,
	multiline: PropTypes.bool,
	placeholder: PropTypes.string,
	variant: PropTypes.string,
	base: PropTypes.bool,
	endAdornment: PropTypes.any,
	onKeyUp: PropTypes.func,
	defaultValue: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	noValid: PropTypes.bool,
	shrink: PropTypes.bool,
}

TextInput.defaultProps = {
	required: false,
	type: TextInputType.NOT_EMPTY,
	limit: 255,
	unlimited: true,
	multiline: false,
	base: false,
	noValid: false,
	input: {}
}

const mapStateToProps = (state) => ({
	errorRedux: state.validation.error,
	input: state.input,
})

const mapDispatchToProps = dispatch => ({
	setRedux: (id, value) => dispatch(setInputValue(id, value)),
	setValid: (id, value) => dispatch(setValidationValue(id, value)),
	setError: (id, value) => dispatch(setErrorValue(id, value)),
	setClearFunc: (id, value) => dispatch(setInputClearFunc(id, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(TextInput))