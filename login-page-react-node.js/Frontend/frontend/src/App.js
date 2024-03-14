import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup.tsx';
import Login from './components/Login.tsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>

     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
