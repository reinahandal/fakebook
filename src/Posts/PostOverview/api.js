import { generatePath } from 'react-router-dom';
import httpClient from '../../httpClient';

export const fetch = id =>
    httpClient.get(generatePath(`/posts/:id`, {id}))
    .then(res => res.data)
    .catch(err => console.error(err))
