import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Star from "./subComponents/Star.tsx";
import {
  markerIconSetFunction,
  setClickedMarkerFunc,
} from "../functions/markerFunctions.ts";
import { ClickedMarkerSetter } from "./subComponents/MarkerSetter.tsx";
import AddNewMarker from "./subComponents/AddNewMarker.tsx";
import RegisterForm from "./Register.tsx";
import LoginForm from "./Login.tsx";
import Navbar from "./subComponents/Navbar.tsx";
import { getTimePassedSinceCreation } from "../functions/globalFunc.ts";

type Center = [number, number];
const Map = ({ points }) => {
  const [center] = useState<Center>([40.155, 22.404]);
  const [pointsArray, setPointsArray] = useState(points);
  const [indexOfClickedMarker, setIndexOfClickedMarker] = useState<number>(
    Number(localStorage.getItem("lastClickedMarker"))
  );
  const [popupOpen, setPopupOpen] = useState(false);
  const [displayRegisterForm, setDisplayRegisterForm] = useState(false);
  const [displayLoginForm, setDisplayLoginForm] = useState(false);
  const [loggedUser, setLoggedUser] = useState(
    localStorage.getItem("loggedAndRegistredUser")
  );

  useEffect(() => {
    setClickedMarkerFunc(
      indexOfClickedMarker,
      pointsArray,
      setPointsArray,
      setIndexOfClickedMarker,
      points,
      
    );
  }, [points]);
  return (
    <>
      <Navbar
        setDisplayRegisterForm={setDisplayRegisterForm}
        setDisplayLoginForm={setDisplayLoginForm}
        setLoggedUser={setLoggedUser}
        setPopupOpen={setPopupOpen}
      />
      <LoginForm
        displayLoginForm={displayLoginForm}
        setDisplayLoginForm={setDisplayLoginForm}
        setLoggedUser={setLoggedUser}
        setPopupOpen={setPopupOpen}
        setDisplayRegisterForm={setDisplayRegisterForm}
      />
      <RegisterForm
        displayRegisterForm={displayRegisterForm}
        setDisplayRegisterForm={setDisplayRegisterForm}
        setLoggedUser={setLoggedUser}
        setDisplayLoginForm={setDisplayLoginForm}
      />
      <MapContainer
        className="mapStyle"
        center={center}
        zoom={5}
        scrollWheelZoom={true}
      >
        <ClickedMarkerSetter
          indexOfClickedMarker={indexOfClickedMarker}
          pointsArray={pointsArray}
        />
       <AddNewMarker
          pointsArray={pointsArray}
          setIndexOfClickedMarker={setIndexOfClickedMarker}
          setPointsArray={setPointsArray}
          popupOpen={popupOpen}
          setPopupOpen={setPopupOpen}
          loggedUser={loggedUser}
          setLoggedUser={setLoggedUser}
          setDisplayLoginForm={setDisplayLoginForm}
        />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pointsArray.map((point, i) => (
          <div className="" key={i}>
            <Marker
              position={[point?.lat, point?.long]}
              icon={markerIconSetFunction(point,loggedUser)}
              eventHandlers={{
                click: () => {
                  setClickedMarkerFunc(
                    i,
                    pointsArray,
                    setPointsArray,
                    setIndexOfClickedMarker,
                    points,
                    
                  );
                  localStorage.setItem("lastClickedMarker", String(i));
                  setPopupOpen(false);
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
                  <span className="username">{point?.username}</span>
                  <span className="date">{getTimePassedSinceCreation(new Date(point.createdAt))}</span>
                </div>
              </Popup>
            </Marker>
          </div>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
