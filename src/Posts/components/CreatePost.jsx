import { generatePath, useHistory, useParams } from "react-router-dom";
import FormModal from "./FormModal";
import { ROUTE } from '../constants';
import { useState } from "react";
import { useCreatePost } from "../useCreatePost";

function CreatePost() {
    const { id } = useParams();
    const [open, setOpen] = useState(true);
    const history = useHistory();

    const { mutateAsync } = useCreatePost();

    const handleClose = () => {
        setOpen(false);
        history.push(generatePath(ROUTE.ROOT, { id }))
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
            onSubmitForm={createPost}
            isModalOpen={open}
            handleClose={handleClose}
        />
    )
}

export default CreatePost;