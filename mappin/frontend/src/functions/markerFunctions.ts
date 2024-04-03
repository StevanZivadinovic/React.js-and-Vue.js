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

export const handleSubmitRegister = (e, newUser, setErrRegistered, setSuccessRegistered)=>{
  e.preventDefault()
  console.log(e, JSON.stringify(newUser.current))
  fetch('/api/users/register_new_user',{
    method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser.current),
  })
  .then((res)=>{
    if(res.ok){
      console.log('User registered', res)
      setErrRegistered(false)
      setSuccessRegistered(true)
    }else{
      setErrRegistered(true)
      setSuccessRegistered(false)
      throw new Error("Registration faild");
    }
  })
  .catch((err)=>{
    console.log(err)
  })
}

export const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, inputFieldRef, newObjectRef, field) => {
  if(inputFieldRef.current){
    newObjectRef.current = {
      ...newObjectRef.current,
      [field]: e.target.value, 
     
    };
  }
};
