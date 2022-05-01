import React, { useState } from 'react';
import UserModalConfirmation from './UserModalConfirm';
import './stylesheets/UserModal.css';
import UserIcon from '../images/user-icon.png'
import CloseIcon from '@mui/icons-material/Close';

const UserModal=({ closeUserModal, props })=>{
    const [openUserModalconfirm, setUserModalconfirm] = useState(false);

    return(
        <div className="user-modalBackground">
            <div className="user-modalContainer">
                <p className="closeIcon-user" onClick={() => closeUserModal(false)}><CloseIcon /></p>
                <div className="user-modalImg">
                    <img src={UserIcon} alt='user-modal-icon' className='user-modal-icon'/>
                </div>
                        <div className="user-modalBody">
                            <p>Username : Username 1</p>
                            <p>Email : Email 1</p>
                            <p>Following : 45</p>
                            <p>Follower : 45</p>
                            <p>Total put down : 3</p>
                        </div>
                <div className="user-modalFooter">
                    <button className="delete-user-button" onClick={() => {setUserModalconfirm(true)}}>Delete</button>
                </div>
            </div>
            {openUserModalconfirm && <UserModalConfirmation closeUserModalconfirm={setUserModalconfirm}/>}
        </div>
    );
}

export default UserModal