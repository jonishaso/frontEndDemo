import { combineReducers } from 'redux'

const blogs = (blogs = [], action) => {
	switch (action.type) {
		case 'ADD_BLOG':
			return [...blogs, action.payload]
		case 'REMOVE_BLOG':
			return blogs.filter(i => i !== action.id)
		case 'INIT_BLOG':
			return [...action.payload.data]
		default:
			return blogs
	}
}

const selectedBlog = (selectedBlog = null, action) => {
	if (action.type === 'SELECT_BLOG') return action.payload
	else if (action.type === 'DESELECT_BLOG') return null
	return selectedBlog
}

const selectUser = (state = [], action) => {
	switch (action.type) {
		case 'SELECT_USER':
			return [...state, action.payload.data]
		default:
			return state
	}
}
export default combineReducers({
	blogList: blogs,
	selectedBlog: selectedBlog,
	users: selectUser
})
