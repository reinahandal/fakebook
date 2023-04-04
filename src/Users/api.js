import { generatePath } from 'react-router-dom';
import httpClient from '../httpClient';

export const fetch = async () => {
    try {
        const resp = await httpClient.get(`/users`)
        return resp.data
    } catch(e){
        throw e;
    }
}

export const fetchUser = async id => {
    try {
        const resp = await httpClient.get(generatePath(`/users/:id`, {id}));
        return resp.data;
    } catch(e){
        throw e;
    }
}