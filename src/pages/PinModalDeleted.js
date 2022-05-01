import React from 'react';
import './stylesheets/ModalSuccess.css';
import CloseIcon from '@mui/icons-material/Close';

const PinModalDeleted=({ closePinModaldeleted })=>{
    return(
        <div className="user-modaldeletedBackground">
            <div className="user-modaldeletedContainer">
                <p className="closeIcon-user" onClick={() => closePinModaldeleted(false)}><CloseIcon /></p>
                <div className="user-modaldeletedBody">
                    <p>Delete Pin Success</p>
                </div>
            </div>
        </div>
    )
}

export default PinModalDeleted