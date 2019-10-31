import React from 'react'
import PropTypes from 'prop-types'
import Blog from './BlogItem'
import Grid from '@material-ui/core/Grid'

const BlogList = ({ blogs }) => (
	<Grid container spacing={2} alignItems="flex-start" justify = "center">
		{blogs.map(b => (
			<Blog key={b.id} id={b.id} userId={b.userId} title={b.title} body={b.body} />
		))}
	</Grid>
)
BlogList.propTypes = {
	blogs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			userId: PropTypes.number,
			title: PropTypes.string,
			body: PropTypes.string
		})
	)
}
export default BlogList
