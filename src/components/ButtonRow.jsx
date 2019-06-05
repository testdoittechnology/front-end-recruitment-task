import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Grid } from '@material-ui/core'
import Button from './Button';
import Tr from 'libs/Translations'

const style = theme => ({
	root: {
		marginTop: theme.spacing(1),
	},
	item: {
		marginLeft: theme.spacing(1),
	}
})

export const CreateButtonItem = (labelTr, onClick) => ({ labelTr, onClick });

class ButtonRow extends React.PureComponent {

	createButtons = () => {
		const { classes } = this.props;
		return this.props.buttons.map(({ labelTr, onClick }, i) => {
			return (
				<Grid item key={i} className={classes.item}>
					<Button
						onClick={onClick}
					>
						{Tr(labelTr)}
					</Button>
				</Grid>
			)
		})
	}

	render() {
		const { classes } = this.props;
		return (
			<Grid
				container
				direction='row-reverse'
				className={classes.root}
			>
				{this.createButtons()}
			</Grid>
		)
	}
}

ButtonRow.propTypes = {
	buttons: PropTypes.arrayOf(
		PropTypes.shape({
			labelTr: PropTypes.string,
			onClick: PropTypes.func,
		})
	),
}


export default withStyles(style)(ButtonRow)