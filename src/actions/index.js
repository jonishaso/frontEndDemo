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
export const fetchUser = id => dispatch => memFetchUser(id, dispatch)

const memFetchUser = _.memoize(async (id, dispatch) => {
	let res = await jsonPlaceHolder.get(`/users/${id}`)
	dispatch({ type: 'SELECT_USER', payload: res })
})
