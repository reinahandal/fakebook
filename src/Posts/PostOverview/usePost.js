import { useQuery } from "@tanstack/react-query";
import { fetch as fetchPost } from "./api";
import { QUERY_KEY } from "./constants";

export const usePost = id => {
    const { data, isLoading, isError } = useQuery({
        queryKey: [QUERY_KEY.POST_OVERVIEW, id],
        queryFn: () => fetchPost(id),
    });

    return {
        data,
        isError,
        isLoading,
    }

}