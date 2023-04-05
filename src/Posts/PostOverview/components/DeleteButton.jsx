import { Button } from "@material-ui/core";
import { useState } from "react";
import { generatePath, useHistory } from "react-router-dom";
import { ROUTES } from "../../constants";
import { useDeletePost } from "../useDeletePost";
import ConfirmDialog from "./ConfirmDialog";

function DeleteButton(props) {
    const [open, setOpen] = useState(false);
    const { postId, userId } = props;
    const history = useHistory();

    const { mutate } = useDeletePost();

    const deletePost = () => {
        try {
            mutate({userId, postId})
            onSuccess();
        } catch(e) {
        }
    }

    const handleClose = () => setOpen(false)

    const onSuccess = () => history.push(generatePath(ROUTES.USER, { id: userId }))

    return (
        <>
        <Button
        variant="outlined" 
        color="secondary"
        onClick={e => setOpen(true)}
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
            />
        }
        </>
    )
}

export default DeleteButton;