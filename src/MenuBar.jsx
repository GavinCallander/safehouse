import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Chat from './Chat';
import Profile from './Profile';
import HomePage from './HomePage';



class MenuBar extends Component {
render() {
    return (
    <div className='MenuBar'>
        <a href="/"><img src="./images/binos.svg" />MAP</a>
        
        <a href="/Profile"><img src="./images/binos.svg" />PROFILE</a>
        
        <a href="/Chat"><img src="./images/binos.svg" />CHAT</a>
        </div>
        
        );
    }
}

export default MenuBar;