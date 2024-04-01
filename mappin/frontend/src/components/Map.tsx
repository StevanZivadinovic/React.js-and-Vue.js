import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
} from "react-leaflet";
import Star from "./subComponents/Star.tsx";
import { markerIconSetFunction, setClickedMarkerFunc } from "../functions/markerFunctions.ts";
import { ClickedMarkerSetter } from "./subComponents/MarkerSetter.tsx";
import AddNewMarker from "./subComponents/AddNewMarke.ts";

const Map = ({ points }) => {
  const [center, setCenter] = useState([40.155, 22.404]);
  const [pointsArray, setPointsArray] = useState(points);
  const [indexOfClickedMarker,setIndexOfClickedMarker]=useState<number>(Number(localStorage.getItem('lastClickedMarker')))


  useEffect(() => {
      setClickedMarkerFunc(indexOfClickedMarker, pointsArray, setPointsArray, setIndexOfClickedMarker, points);
  }, [points]);



  return (
    <MapContainer
      className="mapStyle"
      center={center}
      zoom={5}
      scrollWheelZoom={true}
    >
      <AddNewMarker pointsArray={pointsArray} setIndexOfClickedMarker={setIndexOfClickedMarker} setPointsArray={setPointsArray}/>
      <ClickedMarkerSetter indexOfClickedMarker={indexOfClickedMarker} pointsArray={pointsArray}/>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pointsArray.map((point, i) => (
        <div className="" key={i}>
          <Marker
            position={[point.lat, point.long]}
            icon={markerIconSetFunction(point)}
            eventHandlers={{
              click: () => {
                setClickedMarkerFunc(i, pointsArray, setPointsArray, setIndexOfClickedMarker, points);
                localStorage.setItem("lastClickedMarker", String(i));
              },
            }}
          >
            <Popup>
              <div className="card">
                <label htmlFor="">Place</label>
                <h4 className="place">{point.title}</h4>
                <label htmlFor="">Rewiew</label>
                <p className="desc">{point.desc}!</p>
                <label>Rating</label>
                <div className="stars">
                  <Star numberOfStars={point.rating} />
                </div>
                <label htmlFor="">Information</label>
                <span className="username">stevan_94</span>
                <span className="date">1 hour ago</span>
              </div>
            </Popup>
          </Marker>
        </div>
      ))}
    </MapContainer>
  );
};

export default Map;
