
import React from 'react'
import PropTypes from 'prop-types'
import Tr from 'libs/Translations'
import TextInput, { TextInputType } from '../components/TextInput';

export const CreateInputsItem = (id, labelTr, type) => ({ id, labelTr, type });
export const CreateInputs = (list) => {
	return list.map(({ id, labelTr, type }) => {
		const isDate = type === TextInputType.DATE
		return (
			<TextInput
				key={id}
				id={id}
				label={Tr(labelTr)}
				type={type}
				shrink={isDate}
			/>
		)
	})
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