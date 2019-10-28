import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BlogContainer from './BlogContainer'
import User from './UserItem'

export default () => (
	<Router>
		<Route path="/" component={BlogContainer} />
	</Router>
)
