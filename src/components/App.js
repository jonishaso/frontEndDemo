import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BlogContainer from './BlogContainer'
import User from './UserDetail'

export default () => (
	<Router>
		<div>
			<Route exact path="/" component={BlogContainer} />
			<Route exact path="/user/:userId" component={User} />
		</div>
	</Router>
)
