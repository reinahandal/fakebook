import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm, Controller } from "react-hook-form";
import PropTypes from 'prop-types'

function FormModal(props) {
    const { initialValues, onSubmitForm, handleClose, formTitle, isModalOpen } = props;

    const methods = useForm({
        mode:'all',
        defaultValues: initialValues,
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
        control,
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
                        <Controller
                            control={control}
                            name="title"
                            defaultValue=""
                            render={({
                                field
                            }) => (
                                <TextField
                                    {...field}
                                    autoFocus
                                    margin="dense"
                                    label="Title"
                                    fullWidth
                                />
                            )}
                        />
                        <Controller
                            name="body"
                            control={control}
                            defaultValue=""
                            render={({
                                field
                            }) => (
                                <TextField
                                    {...field}
                                    multiline
                                    rows={5}
                                    margin="dense"
                                    label="Text"
                                    fullWidth
                                />                                
                            )}
                        />
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button 
                                type="submit" 
                                color="primary"
                                disabled={isSubmitting}
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
    formTitle: PropTypes.string.isRequired,
    initialValues: PropTypes.object,
    onSubmitForm: PropTypes.func.isRequired, 
    handleClose: PropTypes.func.isRequired, 
    isModalOpen: PropTypes.bool.isRequired,
}

FormModal.defaultProps = {
    initialValues: {},
}

export default FormModal;