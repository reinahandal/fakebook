import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createPost } from "./api"
import { QUERY_KEY } from './constants';

export const useCreatePost = () => {
    const queryClient = useQueryClient();

    const { mutateAsync } = useMutation({
        mutationFn: (post) => {
            return createPost(post);
        },
        onSuccess: ({ data, id }) => {
            queryClient.setQueryData([QUERY_KEY.POSTS, id], oldData => {
                return [
                    ...oldData,
                    data,
                ];
            });
        },
    });

    return {
        mutateAsync,
    }
}