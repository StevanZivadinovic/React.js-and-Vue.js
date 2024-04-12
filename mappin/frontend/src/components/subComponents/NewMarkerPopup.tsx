import React from "react";
import {
  handleInputChange,
  handleSubmit,
} from "../../functions/markerFunctions.ts";
const NewMarkerPopup = ({
  newMarkerDataRef,
  pointsArray,
  setIndexOfClickedMarker,
  setPointsArray,
  setPopupOpen,
  titleRef,
  descriptionRef,
  ratingRef,
  loggedUserEmail,
  setLoggedUserEmail,
  loggedUserUsername
}) => {
  return (
    <form
      onSubmit={(e) =>
        handleSubmit(
          e,
          newMarkerDataRef,
          pointsArray,
          setIndexOfClickedMarker,
          setPointsArray,
          setPopupOpen,
          loggedUserEmail,
          setLoggedUserEmail,
          loggedUserUsername
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
        onChange={(e) => {
          handleInputChange(e, titleRef, newMarkerDataRef, 'title');
        }}
      />
      <label htmlFor="desc">Description:</label>
      <textarea
        ref={descriptionRef}
        placeholder="Add description"
        id="desc"
        defaultValue={newMarkerDataRef.current.desc}
        onChange={(e) => {
          handleInputChange(e, descriptionRef, newMarkerDataRef,'desc');
        }}
      />
      <label htmlFor="rating">Rating:</label>
      <input
        ref={ratingRef}
        type="number"
        id="rating"
        defaultValue={newMarkerDataRef.current.rating.toString()} 
        onChange={(e) => {
          handleInputChange(e, ratingRef, newMarkerDataRef,'rating');
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewMarkerPopup;
