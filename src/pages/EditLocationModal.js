import React from 'react';
import EditGoogleMap from '../components/EditGoogleMap'
import './stylesheets/EditLocationModal.css';
import CloseIcon from '@mui/icons-material/Close';

const EditLocationModal=({ closeEditLocationModal })=>{
    return(
        <div className="edit-location-modalBackground">
            <div className="edit-location-modalContainer">
                <p className="closeIcon-edit-location" onClick={() => closeEditLocationModal(false)}><CloseIcon /></p>
                <div className="edit-location-modalHeader">
                    <p>Select Location</p>
                </div>
                <div className="edit-location-modalBody">
                    <EditGoogleMap/>
                </div>
                <div className="edit-location-modalFooter">
                    <button className="save-edit-location-button">Save Location</button>
                </div>
            </div>
        </div>
    )
}

export default EditLocationModal