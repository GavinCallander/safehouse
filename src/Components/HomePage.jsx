import React, { Component } from 'react';
import MapBox from './MapBox';
import { Route } from 'react-router-dom';




class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            long: this.state.long,
            lat: this.state.lat
        }
    }
    render() {
        return (
            <container className='mapboxContainer'>
            <header>TITLE HERE</header>
                <div className='mapbox'>
                    {MapBox}
                </div>
                <div className='otherdiv'>
                </div>
            </container>
        )
    }
}

export default HomePage;