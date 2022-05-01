import React from 'react';
import { useNavigate } from 'react-router-dom';
import './stylesheets/Login.css';
import Logo from '../images/logo.png'

const Login=()=>{
    let navigate = useNavigate();
    return(
        <div className='main'>
            <div className='sub-main'>
                <div>
                    <div className='img-login'>
                        <div className='container-img-login'>
                            <img src={Logo} alt='diown-logo-login' className='diown-logo-login'/>
                        </div>
                    </div>
                    <p className='login-appname'>Diown</p>
                    <p className='loginto'>Log In to Diown</p>
                    <p className='text'>Enter your email and password below</p>
                    <div className='container-input-login'>
                        <div>
                            <p className='emailtext'>EMAIL</p>
                            <input type='text' placeholder='Email address' className='input-login-form' id='email' autoComplete='off' required/>
                        </div>
                        <div>
                            <p className='passwordtext'>PASSWORD</p>
                            <input type='password' placeholder='Password' className='input-login-form' id='password' required/>
                        </div>
                    </div>
                    <button className='login-button' onClick={() => {navigate('/event');}}>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Login