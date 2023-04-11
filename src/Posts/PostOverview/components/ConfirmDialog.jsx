import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LoadingIndicator from '../../../common/LoadingIndicator'
import PropTypes from 'prop-types';
import { useState } from 'react';

function ConfirmDialog(props) {
  const { title, subtitle, open, onClose, onConfirm } = props;
  const [isLoading, setIsLoading ] = useState(false);

  const handleConfirm = async () => {
    setIsLoading(true);
    try{
      const resp = await onConfirm();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

      return (
        <div>
          <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
          >
            {
              isLoading ? (<LoadingIndicator/>) :
              <>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {subtitle}
                  </DialogContentText>
                </DialogContent> 
              </>
            }
                <DialogActions>
                  <Button onClick={onClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleConfirm} color="primary" disabled={isLoading} autoFocus>
                    { isLoading ? `Loading...` : `Confirm` }
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
  onClose: PropTypes.func.isRequired, 
  onConfirm: PropTypes.func.isRequired, 
}

export default ConfirmDialog;