import React, { useState } from 'react';
import EditedEventModal from './EditedEventModal';
import './stylesheets/ModalConfirm.css';

const EditEventModalConfirmation=({ closeEditEventModalconfirm })=>{
    const [openEditedEventModal, setEditedEventModal] = useState(false);
    return(
        <div className="user-modalconfirmBackground">
            <div className="user-modalconfirmContainer">
                <div className="user-modalconfirmBody">
                    <p>Are you sure?</p>
                </div>
                <div className="user-modalconfirmFooter">
                    <button className="delete-user-button-yes" onClick={() => setEditedEventModal(true)}>Yes</button>
                    <button className="delete-user-button-no" onClick={() => closeEditEventModalconfirm(false)}>No</button>
                </div>
            </div>
            {openEditedEventModal && <EditedEventModal closeEditedEventModal={setEditedEventModal}/>}
        </div>
    )
}

export default EditEventModalConfirmation