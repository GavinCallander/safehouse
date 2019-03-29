import React, { Component } from 'react';
import MapBox from './MapBox';
import MenuBar from './MenuBar';
import Binos from './images/binos.svg';


class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            long: '',
            lat: ''
        }
    }
    render() {
        return ( 
            <section className='HomePage'>
            <header className='header'>
            <h1 id='h1'>C - CURE</h1>
            <p id='h3'>Explore Below to Find Your SafeHouse</p>
                <div className='mapbox'>
                    <MapBox />
                </div>
                <div className='otherdiv'>
                </div>
                <MenuBar />
                </header>
            </section>
        )
    }
}

export default HomePage;