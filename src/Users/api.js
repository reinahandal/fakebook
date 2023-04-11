import { generatePath } from 'react-router-dom';
import httpClient from '../httpClient';

export const fetch = async () => {
    const resp = await httpClient.get(`/users`);
    return resp.data;
}

export const fetchUser = async id => {
    const resp = await httpClient.get(generatePath(`/users/:id`, { id }));
    return resp.data;
}