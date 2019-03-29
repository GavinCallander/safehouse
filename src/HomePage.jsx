import React, { Component } from 'react';
import MapBox from './MapBox';
import MenuBar from './MenuBar';


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
            <header>Explore Below to Find Your SafeHouse</header>
                <div className='mapbox'>
                    <MapBox />
                </div>
                <div className='otherdiv'>
                </div>
                <MenuBar />
            </section>
        )
    }
}

export default HomePage;