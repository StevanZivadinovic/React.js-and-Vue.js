// import GoogleMapReact from 'google-map-react'
//da dobije google key ides na https://console.cloud.google.com/projectcreate //ovo ne radi jer mora da se plati
import "./map.scss";
import "leaflet/dist/leaflet.css";


import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet"; //instalirao sam openstreetmap, react leafet
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";


export default function Map() {//nije moglo preko coordinates, trazi da se uradi cleanup
  let coords = JSON.parse(localStorage.getItem("geo"));
  
  const [position, setPosition] = useState(coords);
  
  
 
  
  

  function LocationMarker() {
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
    console.log(map);

    map.on("moveend", function (e) {
     
      var bounds = map.getBounds();
      
      console.log(bounds._southWest.lat, bounds._northEast.lat, bounds._southWest.lng, bounds._northEast.lng);
      localStorage.setItem('bounds',JSON.stringify(bounds))
    });

  
    return position === null ? null : (
      <Marker
        position={position}
        draggable="true"
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <div className="map">
      <MapContainer center={position} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker></LocationMarker>

        {/* <Marker  position={position} draggable='true' icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
      <Popup>You are here</Popup>
    </Marker>  */}
      </MapContainer>
    </div>
  );
}
