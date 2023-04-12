
import { Button } from "@material-ui/core";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";
import PropTypes from 'prop-types';

function ConfirmButton(props) {
    const [open, setOpen] = useState(false);
    const { size, confirmBtnText, confirmDialogTitle, confirmDialogSubtitle, onConfirm, successRedirect } = props;

    const handleConfirm = async () => {
        try {
            const resp = await onConfirm();
            onSuccess();
        } catch(e) {
            console.error(e);
        }
    }

    const onClose = () => setOpen(false);

    const onSuccess = () => {
        onClose();
        successRedirect();
    }

    return (
        <>
            <Button
            variant="outlined" 
            color="secondary"
            onClick={e => setOpen(true)}
            size={size}
            >
                {confirmBtnText}
            </Button>
            <ConfirmDialog
                open={open}
                title={confirmDialogTitle}
                subtitle={confirmDialogSubtitle}
                onConfirm={handleConfirm}
                onClose={onClose}
            />
        </>
    )
}

ConfirmButton.propTypes = {
    size: PropTypes.string,
    confirmBtnText: PropTypes.string.isRequired,
    confirmDialogTitle: PropTypes.string,
    confirmDialogSubtitle: PropTypes.string,
    onConfirm: PropTypes.func.isRequired,
    successRedirect: PropTypes.func.isRequired,
};

ConfirmButton.defaultProps = {
    size: `medium`,
    confirmDialogTitle: `Are you sure you want to perform this action?`,
    confirmDialogSubtitle: ``,
}

export default ConfirmButton;
