import { Button } from "@material-ui/core";
import { useState } from "react";
import { generatePath, useHistory } from "react-router-dom";
import { ROUTES } from "../../constants";
import { useDeletePost } from "../useDeletePost";
import ConfirmDialog from "./ConfirmDialog";
import PropTypes from 'prop-types';

function DeleteButton(props) {
    const [open, setOpen] = useState(false);
    const { postId, userId, size } = props;
    const history = useHistory();

    const { mutate, isLoading, isSuccess } = useDeletePost();
    
    const deletePost = async () => {
        try {
            await mutate({userId, postId});
            onSuccess();
        } catch(e) {
        }
    }

    const handleClose = () => setOpen(false);

    const onSuccess = () => {
        if(isSuccess){
            handleClose();
            history.push(generatePath(ROUTES.USER, { id: userId }))
        }
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
            handleConfirm={deletePost}
            handleClose={handleClose}
            isLoading={isLoading}
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