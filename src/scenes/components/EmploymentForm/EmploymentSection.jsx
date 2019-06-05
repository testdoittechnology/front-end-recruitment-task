import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Divider from '../../../components/Divider';
import EmploymentForm from './EmploymentForm';
import Tr from 'libs/Translations'
import { connect } from 'react-redux'
import { setStoreValue } from '../../../redux/action';

const style = theme => ({
})

class EmploymentSection extends React.PureComponent {

	constructor(props) {
		super(props);
		props.setStore('employmentFormSize', props.size)
	}

	createForms = () => {
		const { size } = this.props;
		return new Array(size).fill(0).map((x, i) => {
			return [
				i !== 0 ? <Divider key={'d' + i} dotted /> : '',
				<EmploymentForm
					key={i}
					id={'' + i}
					isLast={i >= size - 1}
					isSingle={ size === 1}
				/>
			]
		})
	}

	render() {
		return (
			<div>
				<Divider title={Tr('employment_history')} />
				{this.createForms()}
			</div>
		)
	}
}

EmploymentSection.propTypes = {
	size: PropTypes.number,
}

EmploymentSection.defaultProps = {
	size: 1,
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
	setStore: (id, value) => dispatch(setStoreValue(id, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(EmploymentSection))