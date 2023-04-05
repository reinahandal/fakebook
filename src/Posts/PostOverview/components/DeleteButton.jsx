import { Button } from "@material-ui/core";
import { useState } from "react";
import { generatePath, useHistory } from "react-router-dom";
import { ROUTES } from "../../constants";
import { useDeletePost } from "../useDeletePost";
import ConfirmDialog from "./ConfirmDialog";

function DeleteButton(props) {
    const [open, setOpen] = useState(false);
    const { postId, userId, size } = props;
    const history = useHistory();

    const { mutate, isLoading, isSuccess } = useDeletePost();

    const deletePost = () => {
        try {
            mutate({userId, postId})
            onSuccess();
        } catch(e) {
        }
    }

    const handleClose = () => setOpen(false)

    const onSuccess = () => {
        history.push(generatePath(ROUTES.USER, { id: userId }))
        handleClose();
    }

    return (
        <>
        <Button
        variant="outlined" 
        color="secondary"
        onClick={e => setOpen(true)}
        size={size}
        >
        Delete
        </Button>
        {
            open &&
            <ConfirmDialog
                open={open}
                title={"Are you sure you want to delete this post?"}
                subtitle={"This is an irreversible action"}
                handleConfirm={deletePost}
                handleClose={handleClose}
                isLoading={isLoading}
            />
        }
        </>
    )
}

export default DeleteButton;