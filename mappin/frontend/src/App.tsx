import "./../src/style/mapStyle.scss";
import "./style/main.scss";
import './../src/style/table_of_users.scss'
import "leaflet/dist/leaflet.css";
import Map from "./components/Map.tsx";
import React, { useEffect, useState } from "react";
import TableOFUsers from "./components/TableOFUsers.tsx";
import { Route, Routes } from "react-router-dom";
function App() {
  const [points, setPoints] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loggedUserUsername, setLoggedUserUsername] = useState("");
  const [initialLoggedUserEmail, setInitialLoggedUserEmail] = useState("");

  useEffect(() => {
    fetch("api/pins/get_pins")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setPoints(data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });

    fetch("/api/users/")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data.user !== null) {
          setIsUserLoggedIn(data.loggedIn);
          setLoggedUserUsername(data.user.username);
          setInitialLoggedUserEmail(data.user.email);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
