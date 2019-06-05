import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Checkbox as CheckboxUI, FormControlLabel } from '@material-ui/core'
import { setInputValue, setInputGroupValue } from '../redux/action';
import { connect } from 'react-redux'

const style = theme => ({
	root: {

	}
})

class Checkbox extends React.PureComponent {

	constructor(props) {
		super(props);
		this.init()	
	}

	init(){
		this.setDataToRedux(this.props.defaultValue)
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.defaultValue !== this.props.defaultValue) {
			this.init()
		}
		const {
			id,
			group,
			input,
		} = this.props;
		if (group){
			if (!input[group]
			|| input[group][id] === undefined) {
				this.init();
			}
		}else{
			if (input[id] === undefined) this.init();
		}
	}

	handleChange = (event, checked) => {
		this.setDataToRedux(checked)
	}

	setDataToRedux(value) {
		const {
			id,
			group,
			setRedux,
			setReduxGroup,
		} = this.props;

		if (group) {
			setReduxGroup(group, id, value);
		} else {
			setRedux(id, value)
		}
	}

	get checked() {
		const {
			id,
			group,
			input,
			defaultValue,
		} = this.props

		if (group) {
			if (!input[group]) return defaultValue
			const v = input[group][id];
			return v !== undefined ? v : defaultValue
		}
		return input[id] !== undefined ? input[id] : defaultValue
	}

	checkboxComponent = () => {
		const { className, id } = this.props;
		return (
			<CheckboxUI
				color='primary'
				className={className}
				id={id}
				checked={this.checked}
				onChange={this.handleChange}
				disabled={this.props.disabled}
			/>
		)
	}

	render() {
		const { label } = this.props;
		if (!label) return this.checkboxComponent();
		return (
			<FormControlLabel
				control={this.checkboxComponent()}
				label={label}
			/>
		)
	}
}

Checkbox.propTypes = {
	id: PropTypes.string.isRequired,
	className: PropTypes.string,
	group: PropTypes.string,
	label: PropTypes.string,
	disabled: PropTypes.bool,
	defaultValue: PropTypes.bool,
}

Checkbox.defaultProps = {
	disabled: false,
	defaultValue: false,
}

const mapStateToProps = (state) => ({
	input: state.input
})

const mapDispatchToProps = dispatch => ({
	setRedux: (id, value) => dispatch(setInputValue(id, value)),
	setReduxGroup: (group, id, value) => dispatch(setInputGroupValue(group, id, value)),
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Checkbox))