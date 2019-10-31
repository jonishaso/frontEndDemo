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
	const classes = useStyles()
	const {
		match: { params }
	} = props
	let { blogId } = params
	if (Number.isInteger(Number(blogId)) && 0 < blogId && blogId < 100)
		return (
			<Grid className={classes.root} container>
				<Grid className={classes.item} item xs={12}>
					<BlogDetails blogId={blogId} />
				</Grid>
				<Grid className={classes.item} item xs={12}>
					<CommentList blogId={blogId} />
				</Grid>
			</Grid>
		)
	else return <h2> Err: invalid Blog id </h2>
}

export default BlogDetailContainer
