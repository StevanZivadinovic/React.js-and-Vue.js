import React, { useRef } from "react";
import { Popup, useMap, useMapEvent } from "react-leaflet";
import { handleDescriptionChange, handleRatingChange, handleSubmit, handleTitleChange } from "../../functions/markerFunctions.ts";

const AddNewMarker = ({
  pointsArray,
  setIndexOfClickedMarker,
  setPointsArray,
  popupOpen,
  setPopupOpen
}) => {
  const titleRef = useRef<HTMLInputElement>(null); 
  const descriptionRef = useRef<HTMLTextAreaElement>(null); 
  const ratingRef = useRef<HTMLInputElement>(null); 
  const newMarkerDataRef = useRef<{ lat: number | null, long: number | null, title: string, desc: string, rating: number }>({
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
    <Popup position={[newMarkerDataRef.current.lat, newMarkerDataRef.current.long]}>
      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            newMarkerDataRef,
            pointsArray,
            setIndexOfClickedMarker,
            setPointsArray,
            setPopupOpen
          )
        }
        key="form"
        className="newMarkerForm"
      >
        <label htmlFor="title">Title:</label>
        <input
          ref={titleRef}
          placeholder="Add title"
          type="text"
          id="title"
          defaultValue={newMarkerDataRef.current.title}
          onChange={(e)=>{handleTitleChange(e, titleRef, newMarkerDataRef)}}
        />
        <label htmlFor="desc">Description:</label>
        <textarea
          ref={descriptionRef}
          placeholder="Add description"
          id="desc"
          defaultValue={newMarkerDataRef.current.desc}
          onChange={(e)=>{handleDescriptionChange(e, descriptionRef, newMarkerDataRef)}}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          ref={ratingRef}
          type="number"
          id="rating"
          defaultValue={newMarkerDataRef.current.rating.toString()} // Convert number to string
          onChange={(e)=>{handleRatingChange(e, ratingRef, newMarkerDataRef)}}
        />
        <button type="submit">Submit</button>
      </form>
    </Popup>
  ) : null;
};

export default React.memo(AddNewMarker);
