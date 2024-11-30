import 'react-image-lightbox/style.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ikonopisac from './Pages/Ikonopisac.tsx';
import Kontakt from './Pages/Kontakt.tsx';
import React from 'react';
import { Helmet } from 'react-helmet';
import Home from './Pages/Home.tsx';
import Galerija from './Pages/Galerija.tsx';
import Footer from './components/footer';

function App() {
  return (
    <div>
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
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
