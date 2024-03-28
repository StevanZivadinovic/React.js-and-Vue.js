import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import L from "leaflet";
import Star from "./subComponents/Star.tsx";
const Map = ({ points }) => {
  const [center, setCenter] = useState([40.155, 22.404]);
  const [pointsArray, setPointsArray] = useState(points);
  const typeOfPointer = true ? "/img/point_black.png" : "/img/point_orange.png";
  const customIcon = new L.Icon({
    iconUrl: typeOfPointer,
    iconSize: [35, 35],
    iconAnchor: [15, 35],
    popupAnchor: [0, -35],
  });
  useEffect(() => {
    setPointsArray(points);
  }, [points]);

  function MyComponent() {
    useMapEvent("click", (e) => {
      const { lat, lng } = e.latlng;
      const newPoint = {
        username: "mile mitic",
        lat: lat,
        long: lng,
        title: "New Point",
        desc: "Description",
        rating: 5,
      };
      console.log(e);
      setPointsArray([...pointsArray, newPoint]);
      fetch('/api/pins/create',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPoint)
      }).then((data)=>{

      }).catch((err)=>{
        throw err;
      })
    });
    return null;
  }

  return (
    <MapContainer
      className="mapStyle"
      center={center}
      zoom={5}
      scrollWheelZoom={true}
    >
      <MyComponent />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pointsArray?.map((point, i) => {
        return (
          <div className="" key={i}>
            <Marker 
            icon={customIcon} 
            position={[point?.lat, point?.long]}
            eventHandlers={{
              click: () => {
                console.log('marker clicked')
              },
            }}
            >
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
