import React from 'react'
import Blog from './BlogItem'
import Grid from '@material-ui/core/Grid'

const BlogList = ({ blogs }) => (
	<Grid container spacing={2} alignItems="center" justify = "center">
		{blogs.map(b => (
			<Blog key={b.id} id={b.id} userId={b.userId} title={b.title} body={b.body} />
		))}
	</Grid>
)

export default BlogList
