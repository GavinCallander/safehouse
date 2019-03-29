import React, { Component } from 'react';
import MapBox from './MapBox';

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
            <section className='mapboxContainer'>
            <header>TITLE HERE</header>
                <div className='mapbox'>
                    <MapBox />
                </div>
                <div className='otherdiv'>
                </div>
            </section>
        )
    }
}

export default HomePage;