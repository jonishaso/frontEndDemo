import React from 'react'
import { connect } from 'react-redux'
import Blog from './blogItem'
import Grid from '@material-ui/core/Grid'
import { initBlog } from '../actions/index'

class BlogList extends React.Component {
	componentDidMount() {
		this.props.initBlog()
	}
	render() {
		const { blogs } = this.props
		return (
			<Grid container spacing={3}>
				{blogs.length === 0 ? (
					<h1>loading</h1>
				) : (
					blogs.map(b => (
						<Blog key={b.id} id={b.id} userId={b.userId} title={b.title} body={b.body} />
					))
				)}
			</Grid>
		)
	}
}

const mapStateToProps = state => {
	return { blogs: state.blogList }
}

export default connect(
	mapStateToProps,
	{ initBlog }
)(BlogList)
