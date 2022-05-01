import React, { useState } from 'react';
import AddedEventModal from './AddedEventModal';
import './stylesheets/ModalConfirm.css';

const AddEventModalConfirmation=({ closeAddEventModalconfirm })=>{
    const [openAddedEventModal, setAddedEventModal] = useState(false);
    return(
        <div className="user-modalconfirmBackground">
            <div className="user-modalconfirmContainer">
                <div className="user-modalconfirmBody">
                    <p>Are you sure?</p>
                </div>
                <div className="user-modalconfirmFooter">
                    <button className="delete-user-button-yes" onClick={() => setAddedEventModal(true)}>Yes</button>
                    <button className="delete-user-button-no" onClick={() => closeAddEventModalconfirm(false)}>No</button>
                </div>
            </div>
            {openAddedEventModal && <AddedEventModal closeAddedEventModal={setAddedEventModal}/>}
        </div>
    )
}

export default AddEventModalConfirmation