import { useMap, useMapEvent } from "react-leaflet";

function AddNewMarker({pointsArray, setIndexOfClickedMarker, setPointsArray}) {
    const map = useMap();
    useMapEvent("click", (e) => {
      const { lat, lng } = e.latlng;
      const newPoint = {
        username: "mile mitic",
        lat: lat,
        long: lng,
        title: "New Point",
        desc: "Description",
        rating: 5,
        clicked: true,
      };
      const updatedPointsArray = pointsArray.map(point => ({
        ...point,
        clicked: false,
      }));
      setIndexOfClickedMarker(pointsArray.length);
      localStorage.setItem("lastClickedMarker", String(pointsArray.length));
      setPointsArray([...updatedPointsArray, newPoint]);

      fetch("/api/pins/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPoint),
      })
        .then((data) => {
          console.log(data)
          
          // Handle response if needed
        })
        .catch((err) => {
          console.error(err);
        });
        map.setView([lat, lng]);
    });

    return null;
  }

  export default AddNewMarker;