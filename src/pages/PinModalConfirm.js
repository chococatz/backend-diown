import React, { useState } from 'react';
import PinModalDeleted from './PinModalDeleted';
import './stylesheets/ModalConfirm.css';

const PinModalConfirmation=({ closePinModalconfirm })=>{
    const [openPinModaldeleted, setPinModaldeleted] = useState(false);
    return(
        <div className="user-modalconfirmBackground">
            <div className="user-modalconfirmContainer">
                <div className="user-modalconfirmBody">
                    <p>Are you sure?</p>
                </div>
                <div className="user-modalconfirmFooter">
                    <button className="delete-user-button-yes" onClick={() => setPinModaldeleted(true)}>Yes</button>
                    <button className="delete-user-button-no" onClick={() => closePinModalconfirm(false)}>No</button>
                </div>
            </div>
            {openPinModaldeleted && <PinModalDeleted closePinModaldeleted={setPinModaldeleted}/>}
        </div>
    )
}

export default PinModalConfirmation