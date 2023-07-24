import React from 'react';
import Nav from '../Nav';
import "./ProfileScreen.css";
import { auth } from "../firebase"
import profilePic from '../assets/Profile.jpg';
import { useSelector } from 'react-redux';
import { selectCount } from '../features/counterSlice';

const ProfileScreen = () => {
  const user = useSelector(selectCount)
  return (
    <div className='profileScreen'>
        <Nav />
        <div className="profileScreen_body">
            <h1>Edit Profile</h1>
            <div className="profileScreen_info">
              <img src={profilePic} alt="avatar" />
            
            <div className='profileScreen_details'>
              <h2>{user.email}</h2>
              <div className="profileScreen_plans">
                <h3>Plans</h3>
                <button onClick={() => auth.signOut()} className='profileScreen_signOut'>Sign Out</button>
              </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen
