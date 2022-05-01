import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PinModal from './PinModal';
import './stylesheets/Sidebar.css';
import './stylesheets/Pin.css';
import Logo from '../images/logo.png'
import UserIcon from '../images/user-icon.png'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PinDropIcon from '@mui/icons-material/PinDrop';
import GroupIcon from '@mui/icons-material/Group';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';

const Pin=()=>{
    const [openPinModal, setPinModal] = useState(false);
    let navigate = useNavigate();

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState("")
    const getUserData = async () => {
        try{
            const data = await axios.get('https://diown-app-server.herokuapp.com/putdown/findAllMarker')
            console.log(data.data)
            setPosts(data.data)
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
        getUserData()
    }, [])

    var i = 1

    return(
        <div className='background'>
            <div className='sidebar'>
                <div className='container-img-index'>
                    <img src={Logo} alt='diown-logo-index' className='diown-logo-index'/>Diown
                </div>
                <ul className='sidebarList' onClick={() => {navigate('/event');}}>
                    <li className='sidebar-row' id='unactive'>
                        <div id='icon'><AssignmentTurnedInIcon /></div>
                        <div id='title'>Event</div>
                    </li>
                    
                </ul>
                <ul className='sidebarList'>
                    <li className='sidebar-row' id='active'>
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
            <div className='topic'>
                <div className='topic-text'>Pin
                    <div className='user-index' id='user-name-position'>Admin 01</div>
                    <div className='user-index' id='user-icon-position'><img src={UserIcon} alt='user-icon-index' className='user-icon-index'/></div>
                </div>
                <div className='topic-menu'>
                    <div className='pin-content'>Pin management</div>
                    <input type='text' placeholder='Search Pin name..' onChange={e => {setSearch(e.target.value)}} className='search-pin-bar'/>
                    <SearchIcon className='search-pin-icon'/>
                </div>
                <div className='pin-table'>
                    <div className='header-pin-table'>
                        <p className='header-pin-num'>#</p>
                        <p className='header-pin-name'>Pin name</p>
                        <p className='header-pin-location'>Location</p>
                        <p className='header-pin-actions'>Actions</p>
                    </div>
                    { posts.filter(item => {
                        if(search === ''){
                            return item
                        }
                        else if(item.marker_id.toLowerCase().includes(search.toLowerCase())){
                            return item
                        }else{
                            return null
                        }
                    }).map(item => {
                        return(
                            <div className='content-pin-table' key={item._id}>
                                <p className='content-pin-num'>{i++}</p>
                                <p className='content-pin-name'>{item.marker_id}</p>
                                <p className='content-pin-location'>{item.lag}, {item.lng}</p>
                                <p className='content-pin-delete' onClick={() => {setPinModal(true)}}>Delete</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            {openPinModal && <PinModal closePinModal={setPinModal}/>}
        </div>
    )
}

export default Pin