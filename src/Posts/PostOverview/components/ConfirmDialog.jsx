import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LoadingIndicator from '../../../common/LoadingIndicator'
import PropTypes from 'prop-types';


function ConfirmDialog(props) {
  // [NamingConvention] handleClose => onClose
  // [NamingConvention] handleConfirm => onConfirm
  const { title, subtitle, open, handleClose, handleConfirm, isLoading, id } = props;
  // isLoading is an internal state of the component, we can detect it's value from `onConfirm` async call.
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
          isLoading ? (<LoadingIndicator />) :
            <>

              <DialogTitle id={`${id}-title`}>{title}</DialogTitle>
              <DialogContent>
                <DialogContentText id={`${id}-description`}>
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
            {/* What if the action is not deleting? */}
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
  id: PropTypes.string,
}

ConfirmDialog.defaultProps = {
  id: 'confirm-dialog' // We could make use of any unique id generator here
}

export default ConfirmDialog;