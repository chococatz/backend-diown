import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class AddGoogleMap extends Component {
    render(){
        return(
            <Map
                google = {this.props.google}
                style = {{width: '34.5%', height: '40%'}}
                zoom = {10}
                initialCenter = {{lat: 13.756331, lng: 100.501762}}>
                <Marker
                    draggable = {true}
                    >
                </Marker>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCQOpaSsmXiQms3g6b7brlSb_cynIDCNb4')
})(AddGoogleMap)