import 'react-image-lightbox/style.css';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Ikonopisac from './components/ikonopisac';
import Galerija from './components/galerija';
import Kontakt from './components/kontakt';
import React from 'react'
import { AdvancedImage } from '@cloudinary/react';



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar></Navbar>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/ikonopisac" exact>
            <Ikonopisac />
          </Route>
          <Route path="/galerija" exact>
            <Galerija />
          </Route>
          <Route path="/kontakt" exact>
            <Kontakt />
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
