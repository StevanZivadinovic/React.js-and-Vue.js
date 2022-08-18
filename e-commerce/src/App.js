import Home from "./pages/Home";
import ShopingCategoryPage from "./pages/ShopingCategoryPage";
import { Product } from "./pages/Product";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
