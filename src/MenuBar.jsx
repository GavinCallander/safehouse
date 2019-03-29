import React, { Component } from 'react';
import Binos from './images/binos.svg';
import { Link } from 'react-router-dom';
import FirstAid from './images/FirstAid.svg';
import HouseMap from './images/HouseMap.svg';
import ActiveExplore from './images/ActiveExplore.svg';
import ActiveMessage from './images/ActiveMessage.svg';
import Bino from './images/binoculars-solid.svg';
import InActiveMessage from './images/InActiveMessage.svg';
import InActiveProfile from './images/InActiveProfile.svg';
import ActiveProfile from './images/ActiveProfile.svg';


class MenuBar extends Component {
render() {
    return (
    <div className='MenuBar'>
        <a href="/"><img src={ActiveExplore} id='img2'/></a>

        <a href="/Chat"><img src={InActiveMessage} id='img1' /></a>
        
        <a href="/Profile"><img src={ActiveProfile} id='img3' /></a>
        

    
    </div>
        
        );
    }
}

export default MenuBar;