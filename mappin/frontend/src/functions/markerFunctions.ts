import { clickedIcon, defaultIcon } from "../consts/mapMarkerConsts.ts";


export const markerIconSetFunction = (point) => {
  if (point.clicked) {
    return clickedIcon;
  } else {
    return defaultIcon;
  }
};

export function setClickedMarkerFunc(
  i: number,
  pointsArray,
  setPointsArray: React.Dispatch<React.SetStateAction<any[]>>,
  setIndexOfClickedMarker: React.Dispatch<React.SetStateAction<number>>,
  points
) {
  setIndexOfClickedMarker(i)
  const updatedPointsArray = pointsArray?.map((p, index) => {
    if (index === i) {
      return { ...p, clicked: true };
    } else {
      return { ...p, clicked: false };
    }
  });

  if(updatedPointsArray.length>0){
      setPointsArray(updatedPointsArray)
    }else{
      setPointsArray(points)
    }
}


export const handleSubmit = async (e, newMarkerDataRef, pointsArray, setIndexOfClickedMarker, setPointsArray, setPopupOpen) => {
  e.preventDefault();
  const { lat, long, title, desc, rating } = newMarkerDataRef.current;
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
    newMarkerDataRef.current ={
      lat: null,
      long: null,
      title: "",
      desc: "",
      rating: 5,
    };
    console.log("Marker added successfully");
  } catch (error) {
    console.error("Error adding marker:", error);
  }

  // Close the popup after submission
  setPopupOpen(false);
  
};


export const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>, titleRef, newMarkerDataRef) => {
  if(titleRef.current){
    newMarkerDataRef.current = {
      ...newMarkerDataRef.current,
      title: e.target.value, 
     
    };
  }
};
export const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>, descriptionRef, newMarkerDataRef) => {
  if(descriptionRef.current){
    newMarkerDataRef.current = {
      ...newMarkerDataRef.current,
      desc: e.target.value, 
     
    };
  }
    
};
export const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>, ratingRef, newMarkerDataRef) => {
  if(ratingRef.current){
    newMarkerDataRef.current = {
      ...newMarkerDataRef.current,
      rating:parseInt(e.target.value),
     
    };}
};
