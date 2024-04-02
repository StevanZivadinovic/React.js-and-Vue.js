
import './../src/style/mapStyle.scss'
import './style/main.scss'
import 'leaflet/dist/leaflet.css';
import Map from './components/Map.tsx';
import React, { useEffect, useState } from 'react';
function App() {
  const [points, setPoints]=useState([])

  useEffect(() => {
      fetch('api/pins/get_pins')
      .then((data)=>{
        return data.json()
      })
      .then(data=>{
        console.log(data)
        setPoints(data)
      })
      .catch((err)=>{
        console.log(err)
        throw err;
      })
  }, [])
  
  return (
    <div className='App'>
      <Map points={points}/>
      </div>
    
  );
}

export default App;
