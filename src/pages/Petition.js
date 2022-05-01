import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PetitionModal from './PetitionModal';
import './stylesheets/Sidebar.css'; 
import './stylesheets/Petition.css';
import Logo from '../images/logo.png'
import UserIcon from '../images/user-icon.png'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PinDropIcon from '@mui/icons-material/PinDrop';
import GroupIcon from '@mui/icons-material/Group';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';

const Usermanagement=()=>{
    const [openPetitionModal, setPetitionModal] = useState(false);
    let navigate = useNavigate();

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState("")
    const getUserData = async () => {
        try{
            const data = await axios.get('https://diown-app-server.herokuapp.com/support/findSup')
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
                <ul className='sidebarList'>
                    <li className='sidebar-row' id='active'> 
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
                <div className='topic-text'>Petition
                    <div className='user-index' id='user-name-position'>Admin 01</div>
                    <div className='user-index' id='user-icon-position'><img src={UserIcon} alt='user-icon-index' className='user-icon-index'/></div>
                </div>
                <div className='topic-menu'>
                    <div className='peti-content'>Petition management</div>
                    <input type='text' placeholder='Search Topic..' onChange={e => {setSearch(e.target.value)}} className='search-petition-bar'/>
                    <SearchIcon className='search-petition-icon'/>
                </div>
                <div className='peti-table'>
                    <div className='header-peti-table'>
                        <p className='header-peti-num'>#</p>
                        <p className='header-peti-topic'>Topic</p>
                        <p className='header-peti-date'>Date</p>
                        <p className='header-peti-actions'>Actions</p>
                    </div>
                    { posts.filter(item => {
                        if(search === ''){
                            return item
                        }
                        else if(item.topic.toLowerCase().includes(search.toLowerCase())){
                            return item
                        }else{
                            return null
                        }
                    }).map(item => {
                        return(
                            <div className='content-peti-table' key={item._id}>
                                <p className='content-peti-num'>{i++}</p>
                                <p className='content-peti-topic'>{item.topic}</p>
                                <p className='content-peti-date'>{item.date}</p>
                                <p className='content-peti-actions' onClick={() => {setPetitionModal(true)}}>View</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            {openPetitionModal && <PetitionModal closePetitionModal={setPetitionModal}/>}
        </div>
    )
}

export default Usermanagement