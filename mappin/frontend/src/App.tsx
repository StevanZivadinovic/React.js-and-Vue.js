import "./../src/style/mapStyle.scss";
import "./style/main.scss";
import "leaflet/dist/leaflet.css";
import Map from "./components/Map.tsx";
import React, { useEffect, useState } from "react";
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
        setIsUserLoggedIn(data.loggedIn);
        if (data.user) {
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
    </div>
  );
}

export default App;
