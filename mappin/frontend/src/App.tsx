import "./../src/style/mapStyle.scss";
import "./style/main.scss";
import './../src/style/table_of_users.scss'
import "leaflet/dist/leaflet.css";
import Map from "./components/Map.tsx";
import React, { useEffect, useState } from "react";
import TableOFUsers from "./components/TableOFUsers.tsx";
import { Route, Routes, useLocation } from "react-router-dom";
import { getAllPins } from "./functions/markerFunctions.ts";
import { getLoggedUserFunc } from "./functions/usersFunctions.ts";
function App() {
  const [points, setPoints] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loggedUserUsername, setLoggedUserUsername] = useState("");
  const [initialLoggedUserEmail, setInitialLoggedUserEmail] = useState("");
  let location = useLocation();

  useEffect(() => {
    getAllPins(setPoints)
    getLoggedUserFunc(setIsUserLoggedIn,setLoggedUserUsername,setInitialLoggedUserEmail)
 
  }, [location.pathname]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Map
              points={points}
              isUserLoggedIn={isUserLoggedIn}
              setIsUserLoggedIn={setIsUserLoggedIn}
              loggedUserUsername={loggedUserUsername ? loggedUserUsername : ""}
              initialLoggedUserEmail={
                initialLoggedUserEmail ? initialLoggedUserEmail : ""
              }
              setLoggedUserUsername={setLoggedUserUsername}
            />
          }
        />
        <Route path="/table_of_users" element={<TableOFUsers />} />
        <Route path="*" element={<>Does not exist!</>} />
      </Routes>
    </div>
  );
}

export default App;
