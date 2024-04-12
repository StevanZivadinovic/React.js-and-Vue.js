import { clickedIcon, defaultIcon, loggedInUserPoints } from "../consts/mapMarkerConsts.ts";
import React from "react";

export const markerIconSetFunction = (point, loggedUser) => {
  if (point.clicked) {
    return clickedIcon;
  } else if(loggedUser===point.username){
    return loggedInUserPoints;
  }
  else{
    return defaultIcon;
  }
};

export function setClickedMarkerFunc(
  i: number,
  pointsArray,
  setPointsArray: React.Dispatch<React.SetStateAction<any[]>>,
  setIndexOfClickedMarker: React.Dispatch<React.SetStateAction<number>>,
  points,

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


export const handleSubmit = async (e, newMarkerDataRef, pointsArray, setIndexOfClickedMarker, setPointsArray, setPopupOpen,loggedUserEmail, setLoggedUserEmail,loggedUserUsername) => {
  e.preventDefault();
  const { lat, long, title, desc, rating } = newMarkerDataRef.current;
  const newPoint = {
    username: loggedUserUsername,
    lat,
    long,
    title,
    desc,
    rating,
    clicked: true,
    createdAt:new Date()
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
    setLoggedUserEmail(loggedUserEmail)
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

export const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, inputFieldRef, newObjectRef, field) => {
  if(inputFieldRef.current){
    newObjectRef.current = {
      ...newObjectRef.current,
      [field]: e.target.value, 
     
    };
  }
};

export const getAllPins = (setPoints)=>{
  fetch("api/pins/get_pins")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
    setPoints(data);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });
}
