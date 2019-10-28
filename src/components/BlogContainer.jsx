import React from "react";


class BlogContainer extends React.Component{
  state = { totalBlogs: [], totalPages: 1, currentPageBlog: [], currentPage: 1 }
	componentDidMount() {
		this.props.initBlog()
	}
  render(){

  }
}