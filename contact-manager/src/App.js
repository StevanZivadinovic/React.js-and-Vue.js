
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

  Navigate
} from "react-router-dom";
import PrvaComponenta from './components/prvaComponenta';
import DrugaComponenta from './components/drugaComponenta';
import TrecaComponenta from './components/trecaComponenta';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrvaComponenta/>}/>
        <Route path='/druga' element={<DrugaComponenta/>}/>
        <Route path='/treca' element={<TrecaComponenta/>}/>
        <Route path='/errorpage' element={<Navigate to='/'/>}/>



      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
