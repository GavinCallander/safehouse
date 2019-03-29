import React, { Component } from 'react';
import MapBox from './MapBox';

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
            <container>
                <div className='mapbox'>
                    {MapBox}
                </div>
                <div className='otherdiv'>
                </div>
            </container>
        )
    }
}