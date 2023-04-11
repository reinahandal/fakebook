import { fetch as fetchPosts } from './api';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from './constants';

export const usePosts = id => {
    const { data, isLoading, isError } = useQuery({
        queryKey: [QUERY_KEY.POSTS, id],
        queryFn: () => fetchPosts(id),
        retry: false,
        staleTime: 300_000,
    });
    return {
        data,
        isLoading,
        isError,
    }
}