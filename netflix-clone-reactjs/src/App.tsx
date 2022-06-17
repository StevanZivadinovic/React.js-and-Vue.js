import React from "react";
import { Route, Routes } from "react-router-dom";
// @ts-ignore
import { AuthContextProvider } from "./components/AuthContext/AuthContext.tsx";
// @ts-ignore
import Layout from "./components/Layout/Layout.tsx";
// @ts-ignore
import routes from "./config/routes.ts";




function App() {

  console.log(process.env.REACT_APP_PROJECTID)
  console.log(AuthContextProvider.value);
  return (
    <>
    <AuthContextProvider>
    <Layout routes={routes}>
     <React.Suspense>
        <Routes>
          {routes.map((route, index) => <Route key={index} path={route.path} element={<route.component {...route.params} />} />)}
        </Routes>
     
      </React.Suspense>
      </Layout>
      </AuthContextProvider>
    </>
  );
}

export default App;
