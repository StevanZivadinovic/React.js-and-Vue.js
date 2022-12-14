import { Routes, Route } from "react-router-dom"
import './App.css'
import { UserContextProvider } from "./context/UserContext";
import Blogs from './pages/Blogs'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/blogs" element={<Blogs />}/>
      </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App
