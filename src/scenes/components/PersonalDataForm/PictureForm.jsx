import React from 'react'
//import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import DoubleColumn from '../../../components/DoubleColumn';
import FilePicker from '../../../components/FilePicker';
import Tr from 'libs/Translations'
import Picture from './Picture';

const style = theme => ({
})

class PictureForm extends React.PureComponent {

	render() {
		return (
			<DoubleColumn
				left={
					<FilePicker
						id='photo'
						buttonProps={{
							children: Tr('choose_photo'),
							fullWidth: true,
						}}
						accept='image/*'
					/>
				}
				right={
					<Picture id='photo'/>
				}
			/>
		)
	}
}

PictureForm.propTypes = {
}


export default withStyles(style)(PictureForm)