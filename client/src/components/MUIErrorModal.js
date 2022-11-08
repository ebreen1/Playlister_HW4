import { useContext } from 'react'
import AuthContext from '../auth'
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIErrorModal() {
    const { auth } = useContext(AuthContext);

    function handleCloseModal(event) {
        auth.closeErrorModal();
    }

    return (
        <Modal
            open={auth.error !== null}
        >
            <Box sx={style}>
                <div className="modal-dialog">
                    <div className="modal-north">
                        Error
                    </div>
                    <div className="modal-center">
                        <div className="modal-center-content">
                            <Alert severity="warning">{auth.error}</Alert>
                        </div>
                    </div>
                <div className = "modal-south">
                    <button
                        id="dialog-no-button"
                        className="modal-button"
                        onClick={handleCloseModal}
                    >OK</button>
                </div>
            </div>
            </Box>
        </Modal>
    );
}