import React, { Component } from 'react';
import ReactMapBoxGl, { Marker } from 'react-mapbox-gl';
import Binoculars from './images/binoculars-solid.svg';
import { Link } from 'react-router-dom';


class MapBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: '47.6076665',
            lon: '-122.33543778148014',
            safehouses: [
            {
                lat: '47.6205',
                lon: '-122.3493'
            }
        ]
        }
    }
    render() {
        const Map = new ReactMapBoxGl({
            accessToken:
                'pk.eyJ1IjoiZ2F2aW5jYWxsYW5kZXIiLCJhIjoiY2p0dDlzaHppMTl2OTRlbGxwZzZsZWFxMyJ9.S6ad33axlftFEFULwQsUjw',
            center: [this.state.lon, this.state.lat]
        })
        const safehouses = this.state.safehouses.map((house, index) => {
            return <Marker key={index}
            coordinates = {[house.lon, house.lat]}
            anchor = 'bottom'>
            <a href='./chat'>
            <img 

                alt = 'marker'
                src = {
                    Binoculars
                }
                width = '50px'
                height = '50px'
                />
                </a>
        </Marker>
        })
        return(
            <>
                <Map
                    height = '200px'
                    style = {'mapbox://styles/mapbox/light-v9'}
                    zoom = {[13.5]}
                    center = {[this.state.lon, this.state.lat]}
                    containerStyle = {{ height: '40em' }}>
                    <Marker
                        coordinates = {[this.state.lon, this.state.lat]}
                        anchor = 'bottom'>
                        <img 
                            alt = 'marker'
                            src = {Binoculars}
                            width = '50px'
                            height = '50px'
                            />
                    </Marker>
                    {safehouses}
                </Map>
            </>
        )
    }
}

export default MapBox;