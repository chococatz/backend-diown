import React from 'react';
import './stylesheets/ModalSuccess.css';
import CloseIcon from '@mui/icons-material/Close';

const DeletedEventModal=({ closeDeletedEventModal })=>{
    return(
        <div className="user-modaldeletedBackground">
            <div className="user-modaldeletedContainer">
                <p className="closeIcon-user" onClick={() => closeDeletedEventModal(false)}><CloseIcon /></p>
                <div className="user-modaldeletedBody">
                    <p>Delete Event Success</p>
                </div>
            </div>
        </div>
    )
}

export default DeletedEventModal