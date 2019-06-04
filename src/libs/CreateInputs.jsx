
import React from 'react'
import PropTypes from 'prop-types'
import Tr from 'libs/Translations'
import TextInput from '../components/TextInput';

export const CreateInputsItem = (id, labelTr, type) => ({id, labelTr, type});
export const CreateInputs = (list) => {
	return list.map(({ id, labelTr, type }) =>
		<TextInput
			key={id}
			id={id}
			label={Tr(labelTr)}
			type={type}
		/>
	)
}

CreateInputs.propTypes = {
	list: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			labelTr: PropTypes.string,
			type: PropTypes.number,
		})
	),
}

export default CreateInputs;