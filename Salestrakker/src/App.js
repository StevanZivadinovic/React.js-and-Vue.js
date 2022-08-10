import React, { useState } from 'react';
import Home from './pages/Home';
import Table from './pages/Table';
import './styles.css'
const App = () => {


 const [visibleHomePage, setVisibleHomePage] = useState(true);

 
  return <>
  {visibleHomePage ? <Home setVisibleHomePageCallback={(boolean)=>{setVisibleHomePage(boolean)}}/>: <Table/>}
  
  </>;
};

export default App;
