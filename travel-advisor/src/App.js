import "./App.css";
import Header from "./components/header/header";
import List from "./components/list/list";
import Map from "./components/map/map";

import { useEffect, useState } from "react";
import { getPlaces } from "./components/api/getPlaces";

function App() {
  const [apiPlaces, setApiPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  
  useEffect(() => {
   setBounds(JSON.parse(localStorage.getItem('bounds')));
   console.log(JSON.parse(localStorage.getItem('bounds'))._northEast.lat);
   console.log('hajjjjjjjjj')
  }, [])

  
  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({ lat: latitude, lng: longitude })
     localStorage.setItem('geo',JSON.stringify({ lat: latitude, lng: longitude }))
    })
  },[]);

    useEffect(()=>{
      console.log(coordinates, bounds)
      getPlaces(bounds).then(data=>{
        console.log(data);
        setApiPlaces(data);
        return data;
      })
    },[bounds])
    // console.log(apiPlaces, coordinates, bounds)


 
  return (
    <div className="App">
  
          <Header></Header>
        <div className="leftRight">
          <List></List>
          <Map setBounds = {setBounds}></Map>
        </div>
       
     
    </div>
  );
}

export default App;
