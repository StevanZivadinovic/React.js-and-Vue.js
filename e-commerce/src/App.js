import Home from "./pages/Home";
import ShopingCategoryPage from "./pages/ShopingCategoryPage";
import Register from "./pages/Register";
import { Product } from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  //react router dom v6, ali je instalirana petica, svakako moras da kucas po novom kodu za 6cu
  BrowserRouter as Router,
  Routes, //ovo je switch zapravo
  Route,
} from "react-router-dom";
import { AuthContextProvider, User } from "./components/AuthContext/AuthContext";
import { useState } from "react";
import { AddProducts } from "./pages/AddProducts";
import { Bag } from "./pages/Bag";

function App() {
  const {user} = User();
  const [collection, setCollection] = useState('')

  const getCollectionFromSlider = (seasson)=>{
    setCollection(seasson)
  }


 
  return (
    <div className="App">
      <Router>
          <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home getCollectionFromSlider={(seasson)=>getCollectionFromSlider(seasson)} />}></Route>
          <Route path="/category" element={<ShopingCategoryPage />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/register" element={<Register />}></Route>  
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart collection={collection} />}></Route> 
          <Route path='/addProducts' element={<AddProducts></AddProducts>}></Route>
          <Route path='/bag' element={<Bag></Bag>}></Route>


        </Routes>
          </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
