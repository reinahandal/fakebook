import { generatePath, useHistory, useParams } from "react-router-dom";
import useCreatePost from "../useCreatePost";
import FormModal from "./FormModal";
import { ROUTES } from '../constants';
import { useState } from "react";

function CreatePost() {
    const { id } = useParams();
    const [open, setOpen] = useState(true);
    const history = useHistory();

    const initialValues = {}

    const { mutateAsync } = useCreatePost();

    const handleClose = () => {
        setOpen(false);
        history.push(generatePath(ROUTES.USER, { id }))
    }

    const createPost = async data => {
        try {
            await mutateAsync({...data, userId: id});
            handleClose();
        } catch(e) {
        }
    }

    return (
        <FormModal 
            formTitle={"Create a new post"}
            initialValues={initialValues}
            onSubmitForm={createPost}
            isModalOpen={open}
            handleClose={handleClose}
        />
    )
}

export default CreatePost;