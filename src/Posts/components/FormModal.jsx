import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'

function FormModal(props) {
    const { initialValues, onSubmitForm, handleClose, formTitle, isModalOpen } = props;

    const methods = useForm({
        mode:'all',
        defaultValues: initialValues,
    });

    const {
        handleSubmit,
        register,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = data => onSubmitForm(data)

    return (
        <div>
          <Dialog 
            open={isModalOpen} 
            onClose={handleClose} 
            aria-labelledby="form-dialog-title"
            fullWidth
        >
            <DialogTitle id="form-dialog-title">{formTitle}</DialogTitle>
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
                            <Button 
                                type="submit" 
                                color="primary"
                            >
                                {
                                isSubmitting ? `Loading...` : 'Submit'
                                }
                            </Button>
                        </DialogActions>
                    </form>
            </DialogContent>
          </Dialog>
        </div>
    );
}

FormModal.propTypes = {
    initialValues: PropTypes.object.isRequired, 
    onSubmitForm: PropTypes.func.isRequired, 
    handleClose: PropTypes.func.isRequired, 
    formTitle: PropTypes.string.isRequired, 
    isModalOpen: PropTypes.bool.isRequired,
}

export default FormModal;