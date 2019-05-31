import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const WorldMap = () => {
  const position = [42.3601, -71.0589];
  return (
    <Map center={position} zoom={4}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

export default WorldMap;
