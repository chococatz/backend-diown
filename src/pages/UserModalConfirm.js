import React, { useState } from 'react';
import UserModalDeleted from './UserModalDeleted';
import './stylesheets/ModalConfirm.css';

const UserModalConfirmation=({ closeUserModalconfirm })=>{
    const [openUserModaldeleted, setUserModaldeleted] = useState(false);
    return(
        <div className="user-modalconfirmBackground">
            <div className="user-modalconfirmContainer">
                <div className="user-modalconfirmBody">
                    <p>Are you sure?</p>
                </div>
                <div className="user-modalconfirmFooter">
                    <button className="delete-user-button-yes" onClick={() => setUserModaldeleted(true)}>Yes</button>
                    <button className="delete-user-button-no" onClick={() => closeUserModalconfirm(false)}>No</button>
                </div>
            </div>
            {openUserModaldeleted && <UserModalDeleted closeUserModaldeleted={setUserModaldeleted}/>}
        </div>
    )
}

export default UserModalConfirmation