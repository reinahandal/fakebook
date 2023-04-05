import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deletePost } from "./api"
import { QUERY_KEY } from "../constants";

export const useDeletePost = () => {
    const queryClient = useQueryClient();

    const { mutateAsync, isLoading } = useMutation({
        mutationFn: ({userId, postId}) => deletePost(userId, postId),
        onSuccess: ({userId, postId}) => {
            queryClient.setQueryData([QUERY_KEY.POSTS, userId], oldData =>
                oldData.filter(post => post.id !== postId)
        )
        }
    });
    return {
        mutate: mutateAsync,
        isLoading,
    }
}