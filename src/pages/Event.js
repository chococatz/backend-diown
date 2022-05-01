import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './stylesheets/Sidebar.css';
import './stylesheets/Event.css';
import Logo from '../images/logo.png'
import UserIcon from '../images/user-icon.png'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PinDropIcon from '@mui/icons-material/PinDrop';
import GroupIcon from '@mui/icons-material/Group';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';

const Event=()=>{
    let navigate = useNavigate();

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState("")
    const getUserData = async () => {
        try{
            const data = await axios.get('https://diown-app-server.herokuapp.com/putdown/findAllEvent')
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
            <div className='topic'>
                <div className='topic-text'>Event
                    <div className='user-index' id='user-name-position'>Admin 01</div>
                    <div className='user-index' id='user-icon-position'><img src={UserIcon} alt='user-icon-index' className='user-icon-index'/></div>
                </div>
                <div className='topic-menu'>
                    <div className='event-content'>Event management</div>
                    <button className='addevent-button' onClick={() => {navigate('/event/addevent');}}>Add event</button>
                    <input type='text' placeholder='Search Event name..' onChange={e => {setSearch(e.target.value)}} className='search-event-bar'/>
                    <SearchIcon className='search-event-icon'/>
                </div>
                <div className='event-table'>
                    <div className='header-event-table'>
                        <p className='header-event-num'>#</p>
                        <p className='header-event-name'>Event name</p>
                        <p className='header-event-location'>Location</p>
                        <p className='header-event-startdate'>Start date</p>
                        <p className='header-event-enddate'>End date</p>
                        <p className='header-event-actions'>Actions</p>
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
                            <div className='content-event-table' key={item._id}>
                                <p className='content-event-num'>{i++}</p>
                                <p className='content-event-name'>{item.marker_id}</p>
                                <p className='content-event-location'>{item.lag}, {item.lng}</p>
                                <p className='content-event-startdate'>{item.start_date}</p>
                                <p className='content-event-enddate'>{item.end_date}</p>
                                <p className='content-event-edit' onClick={() => {navigate('/event/editevent');}}>Edit</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Event