import React from 'react'
import { connect } from 'react-redux'
import { initBlog } from '../actions/index'

/* const BlogList = props => {

	console.log(props)
	return <div>Blog List</div>
} */

class BlogList extends React.Component {
  componentDidMount(){
    this.props.initBlog()
  }
	render() {
    console.log(this.props)
		return <div>Blog List</div>
	}
}

const mapStateToProps = state => {
	console.log('state:')
	console.log(state)
	return { blogs: state.BlogList }
}

export default connect(
	mapStateToProps,
	{ initBlog }
)(BlogList)
