import React from 'react';
import ReactMapBoxGl, { Marker } from 'react-mapbox-gl';

class MapBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lon: '',
            lat: ''
        }
    }
    render() {
        const Map = new ReactMapBoxGl({
            accessToken:
                'pk.eyJ1IjoiZ2F2aW5jYWxsYW5kZXIiLCJhIjoiY2p0dDlzaHppMTl2OTRlbGxwZzZsZWFxMyJ9.S6ad33axlftFEFULwQsUjw',
            center: [this.state.lon, this.state.lat]
        })
        return(
            <>
                <Map
                    height = '200px'
                    style = '{`mapbox://styles/garrettmoore/cjtou2gc86i4l1fnhxx633gtf`}'
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
                            width = '42px'
                            height = '42px'
                            />
                    </Marker>
                </Map>
            </>
        )
    }
}

export default MapBox;