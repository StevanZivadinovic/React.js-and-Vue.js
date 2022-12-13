import { Routes, Route } from "react-router-dom"
import './App.css'
import Blogs from './pages/Blogs'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/blogs" element={<Blogs />}/>
      </Routes>
    </div>
  );
}

export default App
