import { useDeletePost } from "../useDeletePost";
import ConfirmButton from "./ConfirmButton";
import PropTypes from 'prop-types';
import { generatePath, useHistory } from "react-router-dom";
import { ROUTE } from "../../constants";

function DeleteButton(props) {
    const { userId, postId, buttonSize } = props; 
    const history = useHistory();

    const { mutate } = useDeletePost();
    
    const deletePost = async () => {
        try {
            const resp = await mutate({ userId, postId });
        } catch(e) {
            console.error(e);
        }
    }

    const successRedirect = () => history.push(generatePath(ROUTE.ROOT, { id: userId }))

    return (
        <ConfirmButton
            confirmBtnText={"Delete"}
            confirmDialogTitle={"Are you sure you want to delete this post?"} 
            confirmDialogSubtitle={"This is an irreversible action"} 
            onConfirm={deletePost}
            size={buttonSize}
            successRedirect={successRedirect}
        />
    )
}

DeleteButton.propTypes = {
    userId: PropTypes.number.isRequired,
    postId: PropTypes.number.isRequired,
    buttonSize: PropTypes.string,
};

DeleteButton.defaultProps = {
    buttonSize: 'medium',
};

export default DeleteButton;