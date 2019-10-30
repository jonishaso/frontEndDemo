import { jsonPlaceHolder } from '../api'
import _ from 'lodash'

export const addNewBlog = blog => ({
	type: 'ADD_BLOG',
	payload: blog
})

export const removeBlog = id => ({ type: 'REMOVE_BLOG', payload: id })

export const initBlog = () => async dispatch => {
	let res = await jsonPlaceHolder.get('/posts/')
	dispatch({
		type: 'INIT_BLOG',
		payload: res
	})
}
export const fetchSingleBlog = id => async dispatch => {
	let res = await jsonPlaceHolder.get(`/posts/${id}`)
	dispatch({
		type: 'SELECT_BLOG',
		payload: res
	})
}
export const fetchUserBlog = id => async dispatch => {
	let res = await jsonPlaceHolder.get(`/posts?userId=${id}`)
	dispatch({
		type: 'USER_BLOG',
		payload: res
	})
}
export const fetchComments = id => async dispatch => {
	let res = await jsonPlaceHolder.get(`/comments?postId=${id}`)
	dispatch({
		type: 'BLOG_COMMENTS',
		payload: res
	})
}
export const fetchUser = id => dispatch => memFetchUser(id, dispatch)

const memFetchUser = _.memoize(async (id, dispatch) => {
	let res = await jsonPlaceHolder.get(`/users/${id}`)
	dispatch({ type: 'SELECT_USER', payload: res })
})


