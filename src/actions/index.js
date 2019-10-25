import jsonHolderRequest from '../api'

export const addNewBlog = blog => ({
	type: 'ADD_BLOG',
	payload: blog
})

export const removeBlog = id => ({ type: 'REMOVE_BLOG', payload: id })

export const initBlog = () => async dispatch => {
	let res = await jsonHolderRequest.get('/posts')
	dispatch({
		type: 'INIT_BLOG',
		payload: res
	})
}
