import React from "react";
import {
  handleDescriptionChange,
  handleRatingChange,
  handleSubmit,
  handleTitleChange,
} from "../../functions/markerFunctions.ts";
const NewMarkerPopup = ({
  newMarkerDataRef,
  pointsArray,
  setIndexOfClickedMarker,
  setPointsArray,
  setPopupOpen,
  titleRef,
  descriptionRef,
  ratingRef
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
        onChange={(e) => {
          handleTitleChange(e, titleRef, newMarkerDataRef);
        }}
      />
      <label htmlFor="desc">Description:</label>
      <textarea
        ref={descriptionRef}
        placeholder="Add description"
        id="desc"
        defaultValue={newMarkerDataRef.current.desc}
        onChange={(e) => {
          handleDescriptionChange(e, descriptionRef, newMarkerDataRef);
        }}
      />
      <label htmlFor="rating">Rating:</label>
      <input
        ref={ratingRef}
        type="number"
        id="rating"
        defaultValue={newMarkerDataRef.current.rating.toString()} // Convert number to string
        onChange={(e) => {
          handleRatingChange(e, ratingRef, newMarkerDataRef);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewMarkerPopup;
