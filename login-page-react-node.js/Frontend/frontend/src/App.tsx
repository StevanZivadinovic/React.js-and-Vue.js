import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route,useNavigate   } from 'react-router-dom';
import Signup from './components/Signup.tsx';
import Login from './components/Login.tsx';
import Home from './components/Home.tsx';
import { useEffect, useState } from 'react';
import checkIfUserIsLogedIn from './functions/checkIfUserLogedIn.ts';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate ();

  useEffect(() => {
    checkIfUserIsLogedIn(setIsLoggedIn,setLoading)
  }, [])
  

  useEffect(() => {
    console.log(isLoggedIn)
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
     
    </Routes>
  );
}

export default App;
