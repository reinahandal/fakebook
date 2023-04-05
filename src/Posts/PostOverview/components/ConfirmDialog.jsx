import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LoadingIndicator from '../../../common/LoadingIndicator'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root:{
    minWidth: 500,
  }
})

function ConfirmDialog(props) {
    const { title, subtitle, open, handleClose, handleConfirm, isLoading } = props;
    const classes = useStyles();
      return (
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classes.root}
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
                  <Button onClick={handleConfirm} color="primary" autoFocus>
                    Confirm
                  </Button>
                </DialogActions> 
          </Dialog>
        </div>
      );
}

export default ConfirmDialog;