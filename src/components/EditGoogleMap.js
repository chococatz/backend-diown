import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class EditGoogleMap extends Component {
    render(){
        return(
            <Map
                google = {this.props.google}
                style = {{width: '34%', height: '40%'}}
                zoom = {15}
                initialCenter = {{lat: 13.756331, lng: 100.501762}}
            />
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCQOpaSsmXiQms3g6b7brlSb_cynIDCNb4')
})(EditGoogleMap)