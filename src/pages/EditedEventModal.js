import React from 'react';
import './stylesheets/ModalSuccess.css';
import CloseIcon from '@mui/icons-material/Close';

const EditedEventModal=({ closeEditedEventModal })=>{
    return(
        <div className="user-modaldeletedBackground">
            <div className="user-modaldeletedContainer">
                <p className="closeIcon-user" onClick={() => closeEditedEventModal(false)}><CloseIcon /></p>
                <div className="user-modaldeletedBody">
                    <p>Edit Event Success</p>
                </div>
            </div>
        </div>
    )
}

export default EditedEventModal