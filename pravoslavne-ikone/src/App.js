import React, { useState, useRef, useEffect } from "react";
import 'react-image-lightbox/style.css';
// import ReactDOM from "react-dom";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Ikonopisac from './components/ikonopisac';
// import Footer from "./components/footer";
import Galerija from './components/galerija';
import Kontakt from './components/kontakt'
// import { KontaktFunkcije } from "./components/kontaktFunkcije";
function App() {
const [state, setState] = useState({
  childData1: '',
  childData2: '',
 
});
var a;


// let callbackFunction = (childData1,childData2) => {
//   setState(childData1, childData2)

// }

// callbackFunction = callbackFunction.bind(this);  

// setTimeout(()=>{

//   const {childData1, childData2} = callbackFunction;
//   console.log(childData1, childData2)
// },1000)





  return (
    <div className="App">
      <header className="App-header">
      {/* <KontaktFunkcije/> */}
        <Router>
          <Navbar></Navbar>

          <Route path="/" exact ><Home/></Route>

          <Route path="/ikonopisac" exact ><Ikonopisac/></Route>
          <Route path="/galerija" exact ><Galerija/></Route>
         <Route path="/kontakt" exact ><Kontakt/></Route>
         
        </Router>
       
      </header>
    </div>
  );
}

export default App;
