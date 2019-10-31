import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BlogContainer from './BlogContainer'
import User from './UserDetail'
import BlogDetailsContainer from './BlogDetailsContainer'

export default () => (
	<Router>
		<Route exact path="/" component={BlogContainer} />
		<Route exact path="/user/:userId" component={User} />
		<Route exact path="/blog/:blogId" component={BlogDetailsContainer} />
	</Router>
)
