import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { generatePath, useHistory, useParams } from 'react-router-dom';
import { ROUTES } from '../constants';
import { useForm } from "react-hook-form";
import useCreatePost from '../useCreatePost';

function PostForm() {
    const [open, setOpen] = useState(true);
    const history = useHistory();
    const { id } = useParams();

    const methods = useForm();

    const {
        handleSubmit,
        register,
        formState: { isSubmitting },
    } = methods;

    const handleClose = () => {
        setOpen(false);
        history.push(generatePath(ROUTES.USER, { id }))
    };
    
    const { mutateAsync } = useCreatePost();

    const onSubmit = async data => {
        try {
            await mutateAsync({...data, userId: id});
            handleClose();
        } catch(e) {
        }
    };

    return (
        <div>
          <Dialog 
            open={open} 
            onClose={handleClose} 
            aria-labelledby="form-dialog-title"
            fullWidth
        >
            <DialogTitle id="form-dialog-title">Create a new post</DialogTitle>
            <DialogContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        fullWidth
                        name="title"
                        {...register("title")}
                        />
                        <TextField
                        multiline
                        rows={5}
                        margin="dense"
                        id="name"
                        label="Text"
                        fullWidth
                        name="body"
                        {...register("body")}
                        />
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" color="primary">
                                {
                                isSubmitting ? `Loading...` : 'Post'
                                }
                            </Button>
                        </DialogActions>
                    </form>
            </DialogContent>
          </Dialog>
        </div>
    );
}

export default PostForm;