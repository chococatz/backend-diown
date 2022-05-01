import React, { useState } from 'react';
import PinGoogleMap from '../components/PinGoogleMap';
import './stylesheets/PinModal.css';
import PinModalConfirmation from './PinModalConfirm';
import CloseIcon from '@mui/icons-material/Close';

const PinModal=({ closePinModal })=>{
    const [openPinModalConfirm, setPinModalConfirm] = useState(false);
    return(
        <div className="pin-location-modalBackground">
            <div className="pin-location-modalContainer">
                <p className="closeIcon-pin-location" onClick={() => closePinModal(false)}><CloseIcon /></p>
                <div className="pin-location-modalHeader">
                    <p>Location</p>
                </div>
                <div>
                    <p>Pin name : Pin 01</p>
                    <p>Total Put Down : 45</p>
                </div>
                <div className="pin-location-modalBody">
                    <PinGoogleMap/>
                </div>
                <div className="pin-location-modalFooter">
                    <button className="delete-pin-button" onClick={() => {setPinModalConfirm(true)}}>Delete</button>
                </div>
            </div>
            {openPinModalConfirm && <PinModalConfirmation closePinModalconfirm={setPinModalConfirm}/>}
        </div>
    )
}

export default PinModal