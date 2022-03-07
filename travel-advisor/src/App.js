import "./App.css";
import Header from "./components/header/header";
import List from "./components/list/list";
import Map from "./components/map/map";

function App() {
  return (
    <div className="App">
  
          <Header></Header>
        <div className="leftRight">
          <List></List>
          <Map></Map>
        </div>
       
     
    </div>
  );
}

export default App;
