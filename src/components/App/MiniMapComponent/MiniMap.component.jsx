import React from 'react';

import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import './MiniMap.scss';

const svg = '/assets/map_marker.svg';

const MiniMap = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDnatJImtjIyXAbkxx4qHgyE3h5-PRiRbU&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div className="minimap__container" />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.center.lat, lng: props.center.lng }}
  >
    <Marker
      position={{ lat: props.center.lat, lng: props.center.lng }}
      icon={{
        url: svg,
      }}
    />
  </GoogleMap>));

export default MiniMap;
