import { useQuery } from '@tanstack/react-query';
import { fetch as fetchUsers } from "./api";
import { QUERY_KEY } from './constants';

export const useUsers = () => {
    const { data, isLoading, isError } = useQuery({
            queryKey: [QUERY_KEY], 
            queryFn: () => fetchUsers(),
        });

    return {
        data,
        isLoading,
        isError,
    }
};