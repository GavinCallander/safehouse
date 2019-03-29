import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Binos from './images/binos.svg';
import FirstAid from './images/FirstAid.svg';
import HouseMap from './images/HouseMap.svg';



class MenuBar extends Component {
render() {
    return (
    <div className='MenuBar'>

        <a href="/"><img src={HouseMap} id='img1' /></a>
        
        <a href="/Profile"><img src={FirstAid} id='img2'/></a>

        <a href="/Chat"><img src={Binos} id='img3' /></a>
    
    </div>
        
        );
    }
}

export default MenuBar;