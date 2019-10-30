import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BlogContainer from './BlogContainer'
import User from './UserDetail'
import BlogDetails from './BlogDetails'

export default () => (
	<Router>
			<Route exact path="/" component={BlogContainer} />
			<Route exact path="/user/:userId" component={User} />
			<Route exact path="/blog/:id" component={BlogDetails} />
	</Router>
)
