import React from "react";
import { Route, Routes } from "react-router-dom";
// @ts-ignore
import { User } from "./components/AuthContext/AuthContext.tsx";
// @ts-ignore
import { AuthContextProvider } from "./components/AuthContext/AuthContext.tsx";
// @ts-ignore
import Layout from "./components/Layout/Layout.tsx";
// @ts-ignore
import ProtectedRoute from "./components/ProtectedPage/ProtectedRoute.tsx";
// @ts-ignore
import AccountPage from "./pages/Account/Account.tsx";
// @ts-ignore
import routes from "./config/routes.ts";




function App() {
const {user} = User()
  return (
    <>
    <AuthContextProvider>
    <Layout routes={routes}>
     <React.Suspense>
        <Routes>
          
          {routes.map((route, index) => <Route key={index} path={route.path} 
          element={
          <route.component {...route.params} />
          } />)}
          
          <Route path='/account' element={<ProtectedRoute><AccountPage/></ProtectedRoute>}></Route>
        </Routes>
     
      </React.Suspense>
      </Layout>
      </AuthContextProvider>
    </>
  );
}

export default App;
