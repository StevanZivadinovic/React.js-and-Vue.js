import 'react-image-lightbox/style.css';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Ikonopisac from './Pages/Ikonopisac';
import Kontakt from './Pages/Kontakt';
import React from 'react';
import { Helmet } from 'react-helmet';
import Home from './Pages/Home';
import Galerija from './Pages/Galerija';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Helmet>
            <title>Православне иконе - Ниш</title>
            <meta name="description" content="Насловна, православне иконе ниш, србија иконе продаја, иконе са благословом" />
            <meta name="keywords" content="православне иконе, православне иконе ниш, православне иконе продаја, србија иконе продаја, иконе са благословом продаја" />
            <meta name="author" content="Драгана Живадиновић" />
          </Helmet>
          <Navbar />
          <Routes> {/* Wrap routes in Routes */}
            <Route path="/" element={<Home />} /> {/* Use element prop instead of children */}
            <Route path="/ikonopisac" element={<Ikonopisac />} />
            <Route path="/galerija" element={<Galerija />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
