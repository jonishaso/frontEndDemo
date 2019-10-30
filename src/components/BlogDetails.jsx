import React from 'react'
import { connect } from 'react-redux'
import { fetchSingleBlog, fetchComments } from '../actions/index'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Paper'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import UserName from './UserName'

const useStyles = makeStyles({})

const Blog = ({ id, userId, title, body }) => {
	const classes = useStyles()
	return (
		<Paper className={classes.root}>
			<Typography gutterBottom variant="h5" component="h3">
				{`#${id} - ${title}`}
			</Typography>
			<Typography gutterBottom variant="h5" component="h3">
				<UserName userId={userId} />
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
				{body}
			</Typography>
		</Paper>
	)
}
class BlogDetail extends React.component {
	componentDidMount() {}
	render() {
		<Grid container>
			<Grid item xs={12}>
        <Blog />
      </Grid>
		</Grid>
	}
}
const mapStateToProps = state => ({
	currentUser: state.user
})

export default connect(
	mapStateToProps,
	{ fetchSingleBlog, fetchComments }
)(BlogDetail)
