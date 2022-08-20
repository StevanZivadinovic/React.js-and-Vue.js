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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/category" element={<ShopingCategoryPage />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/register" element={<Register />}></Route>  
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route> 



        </Routes>
      </Router>
    </div>
  );
}

export default App;
