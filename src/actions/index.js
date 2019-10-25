import { jsonPlaceHolder } from '../api'

export const addNewBlog = blog => ({
	type: 'ADD_BLOG',
	payload: blog
})

export const removeBlog = id => ({ type: 'REMOVE_BLOG', payload: id })

export const initBlog = () => async dispatch => {
	let res = await jsonPlaceHolder.get('/posts')
	dispatch({
		type: 'INIT_BLOG',
		payload: res
	})
}
