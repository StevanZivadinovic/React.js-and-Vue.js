import React, { useEffect, useState } from "react";
import PlaceDetails from "../placeDetails/placeDetails";
import "./list.scss";
export default function List({apiPlaces, bounds}) {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);
 const [places, setPlaces] = useState(apiPlaces)

//  useEffect(() => {
//    if(apiPlaces){

//      setPlaces(apiPlaces)
//    }
//  }, [bounds])
 
 
  console.log(type, rating);
  return (
    <div className="list">
      <h1>Restaurants, Hotels & Attractions around you</h1>
      <div className="forms">
      <form>
        <label>Type</label>
        <select
          value={type}
          onChange={(e) => {
          setType(e.target.value);
          }}
        >
          <option value="restaurants">Restaurants</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </select>
      </form>

      <form>
        <label>Rating</label>
        <select
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        >
          <option value={0}>All</option>
          <option value={3}>Above 3.0</option>
          <option value={4}>Above 4.0</option>
          <option value={4.5}>Above 4.5</option>
        </select>
      </form>
        </div>

        <div className="places">
       
          {places && places.map((a,i)=>{
            // console.log(a, i, Math.random());
            return <PlaceDetails key={Math.random()} name={a.name}></PlaceDetails>
          })}
          </div>
     
    </div>
  );
}
