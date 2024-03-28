import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Star from "./subComponents/Star.tsx";
import PlaceIcon from '@mui/icons-material/Place';
const Map = ({ points }) => {
  const customIcon = new L.Icon({
    iconUrl: "https://img.icons8.com/pastel-glyph/64/place-marker--v1.png",
    iconSize: [25, 35],
    iconAnchor: [5, 30],
    fill:'red'
  });
  useEffect(() => {
    console.log(points);
  }, [points]);

  return (
    <MapContainer
      className="mapStyle"
      center={[40.155, 22.404]}
      zoom={5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points?.map((point, i) => {
        return (
          <div className="" key={i}>
            <Marker icon={customIcon} position={[point?.long, point?.lat]}>
              <Popup>
                <div className="card">
                  <label htmlFor="">Place</label>
                  <h4 className="place">{point?.title}</h4>
                  <label htmlFor="">Rewiew</label>
                  <p className="desc">{point?.desc}!</p>
                  <label>Rating</label>
                  <div className="stars">
                    <Star numberOfStars={point?.rating} />
                  </div>
                  <label htmlFor="">Information</label>
                  <span className="username">stevan_94</span>
                  <span className="date">1 hour ago</span>
                </div>
              </Popup>
            </Marker>
          </div>
        );
      })}
    </MapContainer>
  );
};
export default Map;
