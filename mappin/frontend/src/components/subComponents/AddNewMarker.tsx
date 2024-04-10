import React, {useRef, useState } from "react";
import { Popup, useMap, useMapEvent } from "react-leaflet";
import NewMarkerPopup from "./NewMarkerPopup.tsx";

const AddNewMarker = ({
  pointsArray,
  setIndexOfClickedMarker,
  setPointsArray,
  popupOpen,
  setPopupOpen,
  loggedUserEmail,
  setLoggedUserEmail,
  setDisplayLoginForm,
  isUserLoggedIn
}) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);
  const [closed, setClosed]=useState(true)

  const newMarkerDataRef = useRef<{
    lat: number | null;
    long: number | null;
    title: string;
    desc: string;
    rating: number;
  }>({
    lat: null,
    long: null,
    title: "",
    desc: "",
    rating: 5, 
  });
const map = useMap()
useMapEvent("click", (e) => {
   if(isUserLoggedIn){
     const { lat, lng } = e.latlng;
     newMarkerDataRef.current = {
       ...newMarkerDataRef.current,
       lat,
       long: lng,
     };
     if(closed){
       setPopupOpen(true);
       setClosed(false);
     }
   }else{
    alert('Please loged in or register!')
    setDisplayLoginForm(true);
   }
    
  
  });

  useMapEvent("popupclose", () => {
    setClosed(true);
  });
  return popupOpen ? (
    <Popup
      position={[newMarkerDataRef?.current?.lat, newMarkerDataRef?.current?.long]}
    >
      <NewMarkerPopup
        newMarkerDataRef={newMarkerDataRef}
        pointsArray={pointsArray}
        setIndexOfClickedMarker={setIndexOfClickedMarker}
        setPointsArray={setPointsArray}
        setPopupOpen={setPopupOpen}
        titleRef={titleRef}
        descriptionRef={descriptionRef}
        ratingRef={ratingRef}
        loggedUserEmail={loggedUserEmail}
        setLoggedUserEmail={setLoggedUserEmail}
      />
    </Popup>
  ) : null
};

export default React.memo(AddNewMarker);
