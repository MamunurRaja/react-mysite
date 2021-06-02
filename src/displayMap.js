import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';

class DisplayMap extends Component {
    state = {  }
    render() { 
        return ( 
            <>
               <div className="container edu" id="skill">
                    <div className="row">
                    <Map google={this.props.google} zoom={14}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
     
 </InfoWindow>
</Map>
                    </div>
               </div>
            </>
         );
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyB1TedBysTKf8xQOwNdzsfID1g_HqwNJNw')
  })(DisplayMap)
