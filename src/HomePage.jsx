import React, { Component } from 'react';

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
            <container>
                <div className='mapbox'>
                </div>
                <div className='otherdiv'>
                </div>
            </container>
        )
    }
}