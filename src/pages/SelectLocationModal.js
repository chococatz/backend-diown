import React from 'react';
import AddGoogleMap from '../components/AddGoogleMap'
import './stylesheets/SelectLocationModal.css';
import CloseIcon from '@mui/icons-material/Close';

const SelectLocationModal=({ closeSelectLocationModal })=>{
    return(
        <div className="location-modalBackground">
            <div className="location-modalContainer">
                <p className="closeIcon-location" onClick={() => closeSelectLocationModal(false)}><CloseIcon /></p>
                <div className="location-modalHeader">
                    <p>Select Location</p>
                </div>
                <div className="location-modalBody">
                    <AddGoogleMap/>
                </div>
                <div className="location-modalFooter">
                    <button className="save-location-button">Save Location</button>
                </div>
            </div>
        </div>
    )
}

export default SelectLocationModal