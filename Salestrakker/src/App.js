import React, { useState } from 'react';
import Home, { AuthContext } from './pages/Home';
import Table from './pages/Table';
import './styles.css'
const App = () => {


 const [visibleHomePage, setVisibleHomePage] = useState(true);

 
  return <>
  {/* <AuthContext> */}
  {visibleHomePage ? <Home setVisibleHomePageCallback={(boolean)=>{setVisibleHomePage(boolean)}}/>: <Table/>}
  {/* </AuthContext> */}
  </>;
};

export default App;
