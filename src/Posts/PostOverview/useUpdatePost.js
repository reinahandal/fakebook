import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updatePost } from "./api"
import { QUERY_KEY } from "./constants";

export const useUpdatePost = () => {
    const queryClient = useQueryClient();

    const { mutateAsync } = useMutation({
        mutationFn: async ({id, data}) => {
            const resp = await updatePost(id, data)
            return resp;
        },
        onSuccess: ({data, id}) => {
            queryClient.setQueryData([QUERY_KEY.POST_OVERVIEW, id], oldData => data)
        }
    });

    return {
        mutateAsync,
    }
}