import React from "react";
import { Route, Routes } from "react-router-dom";
// @ts-ignore
import Layout from "./components/Layout/Layout.tsx";
// @ts-ignore
import routes from "./config/routes.ts";




function App() {
  return (
    <>
    
    <Layout routes={routes}>
     <React.Suspense>
        <Routes>
          {routes.map((route, index) => <Route key={index} path={route.path} element={<route.component {...route.params} />} />)}
        </Routes>
     
      </React.Suspense>
      </Layout>

    </>
  );
}

export default App;