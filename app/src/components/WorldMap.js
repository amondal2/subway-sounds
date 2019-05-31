import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import AudioTile from './AudioTile/AudioTile';

const WorldMap = () => {
  const position = [40.7128, -74.006];
  return (
    <Map center={position} zoom={4}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <AudioTile />
        </Popup>
      </Marker>
    </Map>
  );
};

export default WorldMap;
