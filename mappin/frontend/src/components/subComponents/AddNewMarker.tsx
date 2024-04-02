import React, { useState } from "react";
import { Popup, useMap, useMapEvent } from "react-leaflet";

function AddNewMarker({
  pointsArray,
  setIndexOfClickedMarker,
  setPointsArray,
  popupOpen,
  setPopupOpen,
}) {
  const [newMarkerData, setNewMarkerData] = useState({
    lat: null,
    long: null,
    title: "",
    desc: "",
    rating: 5, // Default rating
  });
  const map = useMap();

  useMapEvent("click", (e) => {
    const { lat, lng } = e.latlng;
    setNewMarkerData({
      ...newMarkerData,
      lat,
      long: lng,
    });
    setPopupOpen(true);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { lat, long, title, desc, rating } = newMarkerData;
    const newPoint = {
      username: "mile mitic", // Example username
      lat,
      long,
      title,
      desc,
      rating,
      clicked: true,
    };

    const updatedPointsArray = pointsArray.map((point) => ({
      ...point,
      clicked: false,
    }));
    setIndexOfClickedMarker(pointsArray.length);
    localStorage.setItem("lastClickedMarker", String(pointsArray.length));
    setPointsArray([...updatedPointsArray, newPoint]);

    try {
      const response = await fetch("/api/pins/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPoint),
      });
      if (!response.ok) {
        throw new Error("Failed to add marker");
      }
      console.log("Marker added successfully");
    } catch (error) {
      console.error("Error adding marker:", error);
    }

    // Close the popup after submission
    setPopupOpen(false);
  };

  return popupOpen ? (
    <Popup position={[newMarkerData.lat, newMarkerData.long]}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          autoFocus
          type="text"
          id="title"
          value={newMarkerData.title}
          onChange={(e) =>
            setNewMarkerData({ ...newMarkerData, title: e.target.value })
          }
        />
        <label htmlFor="desc">Description:</label>
        <textarea
          autoFocus
          id="desc"
          value={newMarkerData.desc}
          onChange={(e) =>
            setNewMarkerData({ ...newMarkerData, desc: e.target.value })
          }
        />
        <label htmlFor="rating">Rating:</label>
        <input
          autoFocus
          type="number"
          id="rating"
          value={newMarkerData.rating}
          onChange={(e) =>
            setNewMarkerData({
              ...newMarkerData,
              rating: parseInt(e.target.value),
            })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </Popup>
  ) : null;
}

export default React.memo(AddNewMarker);