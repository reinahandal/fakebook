import { Button } from "@material-ui/core";
import { useState } from "react";
import { generatePath, useHistory } from "react-router-dom";
import { ROUTE } from "../../constants";
import { useDeletePost } from "../useDeletePost";
import ConfirmDialog from "./ConfirmDialog";
import PropTypes from 'prop-types';

function DeleteButton(props) {
    const [open, setOpen] = useState(false);
    const { postId, userId, size } = props;
    const history = useHistory();

    const { mutate } = useDeletePost();
    
    const deletePost = async () => {
        try {
            await mutate({ userId, postId });
            onSuccess();
        } catch(e) {
            console.error(e);
        }
    }

    const handleClose = () => setOpen(false);

    const onSuccess = () => {
        handleClose();
        history.push(generatePath(ROUTE.ROOT, { id: userId }))
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
            
            <ConfirmDialog
                open={open}
                title={"Are you sure you want to delete this post?"}
                subtitle={"This is an irreversible action"}
                onConfirm={deletePost}
                onClose={handleClose}
            />
        </>
    )
}

DeleteButton.propTypes = {
    userId: PropTypes.number.isRequired,
    postId: PropTypes.number.isRequired,
    size: PropTypes.string,
};

DeleteButton.defaultProps = {
    size: 'medium',
}
export default DeleteButton;