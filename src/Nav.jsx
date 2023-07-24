import React, { useEffect, useState } from 'react';
import './Nav.css';
import logo from './assets/Logo.png';
import profilePic from './assets/Profile.jpg';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();
    
    const transitionNavBar = () => {
        if (window.scrollY > 100)
        {
            handleShow(true);
        }
        else
        {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className='nav_contents'>
                <img 
                    onClick={() => navigate("/")}
                    src={logo} alt='logo' 
                    className='nav_logo'
                ></img>
                <img 
                    onClick={() => navigate('/profile')} 
                    src={profilePic} alt='profilePic' 
                    className='nav_avatar'
                ></img>
            </div>
        </div>
    )
}

export default Nav