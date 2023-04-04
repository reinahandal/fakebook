import { useQuery } from "@tanstack/react-query"
import { fetchUser } from "./api"
import { QUERY_KEY } from "./constants"

export const useUser = id => {
    const { data, isLoading, isError } = useQuery({
        queryKey: [QUERY_KEY.SINGLE, id],
        queryFn: () => fetchUser(id),
    });

    return {
        data,
        isLoading,
        isError,
    }
}