import { generatePath } from 'react-router-dom';
import httpClient from '../httpClient';

export const fetch = () => 
    httpClient.get(`/users`)
    .then(res => res.data)
    .catch(err => console.error(err))


export const fetchUser = id => 
    httpClient.get(generatePath(`/users/:id`, {id}))
    .then(res => res.data)
    .catch(err => console.error(err))