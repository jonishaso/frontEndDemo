import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
	root: {
		margin: '20px auto',
	}
})
const PageButtons = ({ forward, afterward }) => {
	const classes = useStyles()

	return (
		<Grid className={classes.root} container alignItems="center" justify = "center">
			<Grid item>
				<ButtonGroup color="primary" aria-label="outlined primary button group">
					<Button onClick={forward}>{'<<'}</Button>
					<Button onClick={afterward}>{'>>'}</Button>
				</ButtonGroup>
			</Grid>
		</Grid>
	)
}
PageButtons.prototype={
	forward: PropTypes.number,
	afterward: PropTypes.number
}
export default PageButtons
