import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Divider from '../../../components/Divider';
import Tr from 'libs/Translations'
import { connect } from 'react-redux'
import { setStoreValue } from '../../../redux/action';
import EducationForm from './EducationForm';

const style = theme => ({
})

class EducationSection extends React.PureComponent {

	constructor(props) {
		super(props);
		props.setStore('employmentEducationFormSize', props.size)
	}

	createForms = () => {
		const { employmentEducationFormSize } = this.props;
		return new Array(employmentEducationFormSize).fill(0).map((x, i) => {
			return [
				i !== 0 ? <Divider key={'d' + i} dotted /> : '',
				<EducationForm
					key={i}
					id={'' + i}
					isLast={i >= employmentEducationFormSize - 1}
					isSingle={ employmentEducationFormSize === 1}
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

EducationSection.propTypes = {
	size: PropTypes.number,
}

EducationSection.defaultProps = {
	size: 1,
}

const mapStateToProps = (state) => ({
	employmentEducationFormSize: state.store.employmentEducationFormSize
})

const mapDispatchToProps = dispatch => ({
	setStore: (id, value) => dispatch(setStoreValue(id, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(EducationSection))