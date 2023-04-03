import { generatePath } from 'react-router-dom';
import httpClient from '../httpClient';

export const fetch = id => 
    httpClient.get(generatePath(`/users/:id/posts`, { id }))
    .then(res => res.data)
    .catch(err => console.error(err))


// is it good practice to retrieve the user id like so
// and returning it in the response to use it in setQueryData for the query key
// or is it better to pass it through when calling mutateAsync on form submission
export const createPost = (post) => 
    httpClient.post(`/posts`, post)
    .then(response => {
        return {
            data: response.data,
            id: response.data.userId,
        }
    })
    .catch(err => console.error(err))