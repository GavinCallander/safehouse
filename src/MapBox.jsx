import React, { Component } from 'react';
import ReactMapBoxGl, { Marker } from 'react-mapbox-gl';
import Binoculars from './images/binos.svg';
import RobotMap from './images/RobotMap.svg';
import { Link } from 'react-router-dom';


class MapBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: '47.6076665',
            lon: '-122.33543778148014',
            unsafehouses: [
            {
                lat: '47.6205',
                lon: '-122.3493'
            },
            {
                lat: '47.6113',
                lon: '-122.3165'
            },
            {
                lat: '47.6072890',
                lon: '-122.3353181'
            },
            {
                lat: '47.590497638',
                lon: '-122.325665364'
            },
            {
                lat: '47.61422',
                lon: '-122.33476'
            }
        ],
        safehouses: [
            {
                lat: '47.600506',
                lon: '-122.333221'
            },
            {
                lat: '47.6121',
                lon: '122.3319'
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
        const safehouses = this.state.unsafehouses.map((house, index) => {
            return <Marker key={index}
            coordinates = {[house.lon, house.lat]}
            anchor = 'bottom'>
            <a href='./chat'>
            <img 

                alt = 'marker'
                src = {
                    RobotMap
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
                            src = {
                                'https://www.shareicon.net/download/2015/12/05/682942_map.svg'
                            }
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