import React from 'react';
import './stylesheets/ModalSuccess.css';
import CloseIcon from '@mui/icons-material/Close';

const AddedEventModal=({ closeAddedEventModal })=>{
    return(
        <div className="user-modaldeletedBackground">
            <div className="user-modaldeletedContainer">
                <p className="closeIcon-user" onClick={() => closeAddedEventModal(false)}><CloseIcon /></p>
                <div className="user-modaldeletedBody">
                    <p>Add Event Success</p>
                </div>
            </div>
        </div>
    )
}

export default AddedEventModal