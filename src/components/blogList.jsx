import React from 'react'
import { connect } from 'react-redux'
import Blog from './blogItem'
import Grid from '@material-ui/core/Grid'
import PageButtons from './PageButtons'
import { initBlog } from '../actions/index'

class BlogList extends React.Component {
	state = { totalBlogs: [], totalPages: 1, currentPageBlog: [], currentPage: 1 }
	componentDidMount() {
		this.props.initBlog()
	}
	render() {
		const { blogs } = this.props
		return (
			<React.Fragment>
				<Grid container spacing={3}>
					{blogs.length === 0 ? (
						<h1>loading</h1>
					) : (
						blogs.map(b => (
							<Blog
								key={b.id}
								id={b.id}
								userId={b.userId}
								title={b.title}
								body={b.body}
							/>
						))
					)}
				</Grid>
				<Grid container alignItems="center">
					<Grid item>
						<PageButtons totalPage={5} currentPage={1} />
					</Grid>
				</Grid>
			</React.Fragment>
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
