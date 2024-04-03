import React from "react";
const newMarkerPopup = ({ newMarkerData, handleSubmit, setNewMarkerData }) => {
  return (
    <form onSubmit={handleSubmit} key="form" className="newMarkerForm">
      <label htmlFor="title">Title:</label>
      <input
        placeholder="Add title"
        type="text"
        id="title"
        value={newMarkerData.title}
        onChange={(e) =>
          setNewMarkerData({ ...newMarkerData, title: e.target.value })
        }
      />
      <label htmlFor="desc">Description:</label>
      <textarea
        placeholder="Add description"
        id="desc"
        value={newMarkerData.desc}
        onChange={(e) =>
          setNewMarkerData({ ...newMarkerData, desc: e.target.value })
        }
      />
      <label htmlFor="rating">Rating:</label>
      <input
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
  );
};

export default newMarkerPopup;
