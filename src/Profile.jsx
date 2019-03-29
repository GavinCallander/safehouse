import React, { Component } from 'react';
import Toggle from './images/toggle.png'


const Profile = (props) => {
    return (
        <div className='Profile'>
        <h1 id='robot'>I Am not a robot</h1>
        <img src={Toggle}></img>
        </div>
    )
}

export default Profile;

