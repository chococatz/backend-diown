import React from 'react';
import './stylesheets/PetitionModal.css';
import UserIcon from '../images/user-icon.png'
import CloseIcon from '@mui/icons-material/Close';

const PetitionModal=({ closePetitionModal })=>{
    return(
        <div className="petition-modalBackground">
            <div className="petition-modalContainer">
                <p className="closeIcon-user" onClick={() => closePetitionModal(false)}><CloseIcon /></p>
                <div className="petition-modalImg">
                    <img src={UserIcon} alt='petition-modal-icon' className='petition-modal-icon'/>
                </div>
                <div className="user-modalBody">
                    <p>Username : User 01</p>
                    <p>Date : 01/01/2022</p>
                    <p>
                        Topic : Lorem Ipsum is simply dummy text
                    </p>
                    <p>
                        Details : Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PetitionModal