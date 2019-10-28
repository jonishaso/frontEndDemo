import React from 'react'
import { connect } from 'react-redux'
import { initBlog } from '../actions/index'
import BlogList from './blogList'
import Grid from '@material-ui/core/Grid'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
const ITEMS_PER_PAGE = 9

class BlogContainer extends React.Component {
	state = { firstItemIndex: 0, nextItemIndex: 9 }
	componentDidMount() {
		this.props.initBlog()
	}
	handleNext = () => {
		let blogLen = this.props.blogs.length
		let next = this.state.nextItemIndex + ITEMS_PER_PAGE
		let first = this.state.nextItemIndex
		next = next >= blogLen ? blogLen : next
		first = first >= blogLen - ITEMS_PER_PAGE ? blogLen - ITEMS_PER_PAGE : first
		this.setState({
			nextItemIndex: next,
			firstItemIndex: first
		})
	}
	handlePrevious = () => {
		let next = this.state.firstItemIndex - ITEMS_PER_PAGE
		let first = this.state.nextItemIndex - ITEMS_PER_PAGE
		first = first <= 0 ? 0 : first
		next = next <= 9 ? 9 : next
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
			<React.Fragment>
				{this.props.blogs.length > 0 ? <BlogList blogs={pageBlogs} /> : <h1>Loading</h1>}
				<Grid container alignItems="center">
					<Grid item>
						<ButtonGroup color="primary" aria-label="outlined primary button group">
							<Button onClick={this.handlePrevious}>{'<<'}</Button>
							<Button onClick={this.handleNext}>{'>>'}</Button>
						</ButtonGroup>
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
)(BlogContainer)
