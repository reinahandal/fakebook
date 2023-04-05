import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function ConfirmDialog(props) {
    const { title, subtitle, open, handleClose, handleConfirm } = props;
    
      return (
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {subtitle}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleConfirm} color="primary" autoFocus>
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}

export default ConfirmDialog;