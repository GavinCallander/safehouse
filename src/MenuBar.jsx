import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Chat from './Chat';
import Profile from './Profile';
import HomePage from './HomePage';



class MenuBar extends Component {
render() {
    return (
    <div className='MenuBar'>
        <Link to='/HomePage'>
            </Link>
        <Link to='/Chat'>
            </Link>
        <Link to='/Profile'>
            </Link>
        <img src='' alt="Logo" />;
        </div>
        
        );
    }
}

export default MenuBar;