import React, { useRef } from "react";
import { Popup, useMap, useMapEvent } from "react-leaflet";
import NewMarkerPopup from "./NewMarkerPopup.tsx";

const AddNewMarker = ({
  pointsArray,
  setIndexOfClickedMarker,
  setPointsArray,
  popupOpen,
  setPopupOpen,
}) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);
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
    rating: 5, // Default rating
  });

  const map = useMap();

  useMapEvent("click", (e) => {
    const { lat, lng } = e.latlng;
    newMarkerDataRef.current = {
      ...newMarkerDataRef.current,
      lat,
      long: lng,
    };
    setPopupOpen(true);
  });

  return popupOpen ? (
    <Popup
      position={[newMarkerDataRef.current.lat, newMarkerDataRef.current.long]}
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
      />
    </Popup>
  ) : null;
};

export default React.memo(AddNewMarker);
