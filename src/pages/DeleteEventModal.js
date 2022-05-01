import React, { useState } from 'react';
import DeletedEventModal from './DeletedEventModal';
import './stylesheets/ModalConfirm.css';

const DeleteEventModalConfirmation=({ closeDeleteEventModalconfirm })=>{
    const [openDeletedEventModal, setDeletedEventModal] = useState(false);
    return(
        <div className="user-modalconfirmBackground">
            <div className="user-modalconfirmContainer">
                <div className="user-modalconfirmBody">
                    <p>Are you sure?</p>
                </div>
                <div className="user-modalconfirmFooter">
                    <button className="delete-user-button-yes" onClick={() => setDeletedEventModal(true)}>Yes</button>
                    <button className="delete-user-button-no" onClick={() => closeDeleteEventModalconfirm(false)}>No</button>
                </div>
            </div>
            {openDeletedEventModal && <DeletedEventModal closeDeletedEventModal={setDeletedEventModal}/>}
        </div>
    )
}

export default DeleteEventModalConfirmation