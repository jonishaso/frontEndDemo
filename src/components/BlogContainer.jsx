import React from 'react'
import { connect } from 'react-redux'
import { initBlog } from '../actions/index'
import { Container } from '@material-ui/core'
import BlogList from './BlogList'
import PageButtons from './PageButtons'

const ITEMS_PER_PAGE = 9

class BlogContainer extends React.Component {
	state = { firstItemIndex: 0, nextItemIndex: 9 }
	componentDidMount() {
		this.props.initBlog()
	}
	moveForward = () => {
		let blogLen = this.props.blogs.length
		let next = this.state.nextItemIndex + ITEMS_PER_PAGE
		let first = this.state.nextItemIndex
		if (next >= blogLen) {
			next = blogLen
			first = blogLen - ITEMS_PER_PAGE
		}
		this.setState({
			nextItemIndex: next,
			firstItemIndex: first
		})
	}
	moveAfterward = () => {
		let next = this.state.nextItemIndex - ITEMS_PER_PAGE
		let first = this.state.firstItemIndex - ITEMS_PER_PAGE
		if (first <= 0) {
			next = 9
			first = 0
		}
		this.setState({
			nextItemIndex: next,
			firstItemIndex: first
		})
	}
	render() {
		let pageBlogs = []
		let { firstItemIndex, nextItemIndex } = this.state
		console.log(this.state)
		if (this.props.blogs.length > 0)
			pageBlogs = this.props.blogs.slice(firstItemIndex, nextItemIndex)
		return (
			<Container maxWidth="md">
				{this.props.blogs.length > 0 ? <BlogList blogs={pageBlogs} /> : <h1>Loading</h1>}
				<PageButtons forward={this.moveAfterward} afterward={this.moveForward} />
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return { blogs: state.blogList }
}

export default connect(
	mapStateToProps,
	{ initBlog }
)(BlogContainer)
