import axios from 'axios'

export let jsonPlaceHolder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})

export let randomUserRequest = axios.create({
  baseURL:"https://randomuser.me/api/"
})