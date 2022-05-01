import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddEventModalConfirmation from './AddEventModal';
import SelectLocationModal from './SelectLocationModal';
import './stylesheets/Sidebar.css';
import './stylesheets/AddEvent.css';
import Logo from '../images/logo.png'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PinDropIcon from '@mui/icons-material/PinDrop';
import GroupIcon from '@mui/icons-material/Group';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AddEvent=()=>{
    let navigate = useNavigate();
    const [openAddEventModalconfirm, setAddEventModalconfirm] = useState(false);
    const [openSelectLocationModal, setSelectLocationModal] = useState(false);

    const [image, setImage] = useState([]);
    const [imageURL, setImageURL] = useState([]);

    useEffect(() => {
        if(image.length < 1) return;
        const newImageURL = [];
        image.forEach(image => newImageURL.push(URL.createObjectURL(image)));
        setImageURL(newImageURL);
    }, [image]);

    function onImageChange(e) {
        setImage([...e.target.files]);
    }

    return(
        <div className='background'>
            <div className='sidebar'>
                <div className='container-img-index'>
                    <img src={Logo} alt='diown-logo-index' className='diown-logo-index'/>Diown
                </div>
                <ul className='sidebarList'>
                    <li className='sidebar-row' id='active'>
                        <div id='icon'><AssignmentTurnedInIcon /></div>
                        <div id='title'>Event</div>
                    </li>
                    
                </ul>
                <ul className='sidebarList' onClick={() => {navigate('/pin');}}>
                    <li className='sidebar-row' id='unactive'>
                        <div id='icon'><PinDropIcon /></div>
                        <div id='title'>Pin</div>
                    </li>
                </ul>
                <ul className='sidebarList' onClick={() => {navigate('/usermanagement');}}>
                    <li className='sidebar-row' id='unactive'> 
                        <div id='icon'><GroupIcon /></div>
                        <div id='title'>User management</div>
                    </li>
                </ul>
                <ul className='sidebarList' onClick={() => {navigate('/petition');}}>
                    <li className='sidebar-row' id='unactive'> 
                        <div id='icon'><ContactMailIcon /></div>
                        <div id='title'>Petition</div>
                    </li>
                </ul>
                <ul className='sidebarList' onClick={() => {navigate('/');}}>
                    <li className='sidebar-row' id='logout'>
                        <div id='icon'><PowerSettingsNewIcon /></div>
                        <div id='title'>Log out</div>
                    </li>
                </ul>
            </div>
            <div className='add-event-content'>
                <div className='up_img-event-container'>
                    <label htmlFor='default-up-btn' id='custom-up-btn'>
                        <div className='up_img-event-wrapper'>
                            <div className='up_img-content'>
                                <div className='up_img-icon'>
                                    <CloudUploadIcon className='upload-event-icon' />
                                </div>
                                <div className='up_img-text'>UPLOAD IMAGE</div>
                                <label htmlFor='default-up-btn' id='upload-event-again' className='up_img-preview'>
                                    { imageURL.map((imageSrc, idx) => <img key={idx} src={imageSrc} alt='event-img-preview' />) }
                                </label>
                            </div>
                        </div>
                    </label>
                    <input id='default-up-btn' type='file' multiple accept='image/*' onChange={onImageChange} hidden required></input>
                </div>
            </div>
            <div className='content-event-container'>
                <div>
                    <span className='event-name-text'>Event name</span>
                    <input type='text' className='input-event-name' autoComplete='off' required></input>
                </div>
                <div className='event-topic-text'>
                    <span className='event-start-text'>Start date</span>
                    <input type='date' className='input-event-start' required></input>
                    <span className='event-start-time-text'>Time</span>
                    <input type='time' className='input-event-start-time' required></input>
                </div>
                <div className='event-topic-text'>
                    <span className='event-end-text'>End date</span>
                    <input type='date' className='input-event-end' required></input>
                    <span className='event-end-time-text'>Time</span>
                    <input type='time' className='input-event-end-time' required></input>
                </div>
                <div className='event-topic-text'>
                    <span className='event-location-text'>Location</span>
                    <input type='text' className='input-event-location' placeholder='Select Location' required readOnly onClick={() => {setSelectLocationModal(true)}}></input>
                    <LocationOnIcon className='location-icon'/>
                </div>
                <div className='add-event-btn'><button onClick={() => {setAddEventModalconfirm(true)}}>Add Event</button></div>
            </div>
            {openSelectLocationModal && <SelectLocationModal closeSelectLocationModal={setSelectLocationModal}/>}
            {openAddEventModalconfirm && <AddEventModalConfirmation closeAddEventModalconfirm={setAddEventModalconfirm}/>}
        </div>
    )
}

export default AddEvent