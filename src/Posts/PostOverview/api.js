import { generatePath } from 'react-router-dom';
import httpClient from '../../httpClient';

export const fetch = async id => {
    try {
        const resp = await httpClient.get(generatePath(`/posts/:id`, {id}))
        return resp.data;
    } catch (e) {
        throw e;
    }
}

export const deletePost = id => httpClient.delete(generatePath(`/posts/:id`, {id}))


export const updatePost = async (id, post) => {
    try {
        const resp = await httpClient.put(generatePath(`/posts/:id`, {id}), post)
        return {
            data: resp.data,
            id: (resp.data.id).toString(),
        }
    } catch(e) {
        throw e;
    }
}
