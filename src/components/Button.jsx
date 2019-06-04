import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Button as ButtonUI } from '@material-ui/core'

const style = theme => ({
})

class Button extends React.PureComponent {

	render() {
		const { children, onClick } = this.props;
		return (
			<ButtonUI
				onClick={onClick}
				variant='contained'
				color='primary'
			>
				{children}
			</ButtonUI>
		)
	}
}

Button.propTypes = {
	children: PropTypes.any,
	onClick: PropTypes.func,
}


export default withStyles(style)(Button)