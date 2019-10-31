import React from 'react'
import BlogDetails from './BlogDetails'
import CommentList from './CommentList'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Paper'

const useStyles = makeStyles({
	root: {
		width: '80%',
		margin: '40px auto',
		boxShadow: 'none'
	},
	item: {
		margin: '30px'
	}
})

const BlogDetailContainer = props => {
	const {
		match: { params }
	} = props
	const classes = useStyles()
	return (
		<Grid className={classes.root} container>
			<Grid className={classes.item} item xs={12}>
				<BlogDetails blogId={params.blogId} />
			</Grid>
			<Grid className={classes.item} item xs={12}>
				<CommentList blogId={params.blogId} />
			</Grid>
		</Grid>
	)
}
export default BlogDetailContainer
