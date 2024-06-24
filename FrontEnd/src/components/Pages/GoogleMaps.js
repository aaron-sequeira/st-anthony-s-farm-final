//  AIzaSyCAfTZpqZ4M794_cywLJvxJHSgK1nG7L_k   <---API key
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCAfTZpqZ4M794_cywLJvxJHSgK1nG7L_k",
})(MapContainer);
