import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LoadingIndicator from '../../../common/LoadingIndicator'
import PropTypes from 'prop-types';

function ConfirmDialog(props) {
    const { title, subtitle, open, handleClose, handleConfirm, isLoading } = props;

      return (
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
          >
            {
              isLoading ? (<LoadingIndicator/>) :
              <>
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {subtitle}
                  </DialogContentText>
                </DialogContent> 
              </>
            }
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleConfirm} color="primary" disabled={isLoading} autoFocus>
                    {isLoading ? "Deleting..." : "Confirm"}
                  </Button>
                </DialogActions> 
          </Dialog>
        </div>
      );
}

ConfirmDialog.propTypes = {
  title: PropTypes.string.isRequired, 
  subtitle: PropTypes.string.isRequired, 
  open: PropTypes.bool.isRequired, 
  handleClose: PropTypes.func.isRequired, 
  handleConfirm: PropTypes.func.isRequired, 
  isLoading: PropTypes.bool.isRequired,
}

export default ConfirmDialog;