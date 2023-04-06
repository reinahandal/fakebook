import { useState } from "react";
import { generatePath, useHistory, useParams } from "react-router-dom";
import FormModal from "../../components/FormModal";
import { ROUTES } from "../constants";
import { usePost } from "../usePost";
import { useUpdatePost } from "../useUpdatePost";

function EditPost() {
    const [open, setOpen] = useState(true);
    const history = useHistory();
    const { id } = useParams();

    const handleClose = () => {
        setOpen(false);
        history.push(generatePath(ROUTES.OVERVIEW, { id }));
    }

    const { data: post } = usePost(id);

    const { mutateAsync } = useUpdatePost();

    const initialValues = post;

    const updatePost = async data => {
        try {
            const resp = await mutateAsync({id, data});
            handleClose();
        } catch(e){
        }
    }
    if(post) {
        return (
            <FormModal
                formTitle={"Edit Post"}
                initialValues={initialValues}
                onSubmitForm={updatePost}
                isModalOpen={open}
                handleClose={handleClose}
            />
        )
    }
}

export default EditPost;