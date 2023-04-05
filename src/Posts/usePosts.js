import { fetch as fetchPosts } from './api';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from './constants';

export const usePosts = id => {
    const { data, isLoading, isError } = useQuery({
        queryKey: [QUERY_KEY.POSTS, id],
        queryFn: () => fetchPosts(id),
    });
    return {
        data,
        isLoading,
        isError,
    }
}