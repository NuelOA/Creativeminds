import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
  top: '7em',
  bottom: '10em',
  width: '100%',
  height: '80%',
  alignItems: 'center',
};

export class MapContainer extends Component {
  render() {
    return (
      
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={
          {
            lat: 5.747999555424577,
            lng: -0.1376281894012735
           
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper(
    (props) => ({
        apiKey: 'AIzaSyBmQP4BLI0DnjvRyigZ6W-1jadXESxH2xQ',
      apiKey: props.apiKey
    }
  ))(MapContainer)

