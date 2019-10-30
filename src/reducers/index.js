import { combineReducers } from 'redux'

const blogs = (blogs = [], action) => {
	switch (action.type) {
		case 'ADD_BLOG':
			return [...blogs, action.payload]
		case 'REMOVE_BLOG':
			return blogs.filter(i => i !== action.id)
		case 'INIT_BLOG':
			return [...action.payload.data]
		case 'USER_BLOG':
			return [...action.payload.data]
		default:
			return blogs
	}
}

const selectedBlog = (selectedBlog = null, action) => {
	switch (action.type) {
		case 'SELECT_BLOG':
			return action.payload
		default:
			return selectedBlog
	}
}

const selectUser = (state = null, action) => {
	switch (action.type) {
		case 'SELECT_USER':
			return action.payload.data
		default:
			return state
	}
}

const comments = (state = [], action) => {
	switch (action.type) {
		case 'BLOG_COMMENTS':
			return action.payload.data
		default:
			return state
	}
}

export default combineReducers({
	blogList: blogs,
	selectedBlog: selectedBlog,
	user: selectUser,
	commentList: comments
})
