import React from 'react';
import './stylesheets/ModalSuccess.css';
import CloseIcon from '@mui/icons-material/Close';

const UserModalDeleted=({ closeUserModaldeleted })=>{
    return(
        <div className="user-modaldeletedBackground">
            <div className="user-modaldeletedContainer">
                <p className="closeIcon-user" onClick={() => closeUserModaldeleted(false)}><CloseIcon /></p>
                <div className="user-modaldeletedBody">
                    <p>Delete User Success</p>
                </div>
            </div>
        </div>
    )
}

export default UserModalDeleted