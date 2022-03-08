import React from 'react'
import './map.scss'
import GoogleMapReact from 'google-map-react'
import 'leaflet/dist/leaflet.css';
//da dobije google key ides na https://console.cloud.google.com/projectcreate //ovo ne radi jer mora da se plati

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'//instalirao sam openstreetmap, react leafet
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

export default function Map() {

  const position = [44.505, 21.09]
  return (
    <div className='map'>
     <MapContainer center={position} zoom={14}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

{/* icon={'./img/pointer.jpg'} */}
  <Marker position={position} draggable='true' icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
      <Popup>You are here</Popup>
    </Marker>
</MapContainer>
    
      </div>
  )
}
