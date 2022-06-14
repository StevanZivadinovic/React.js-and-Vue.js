import React, { FC, ReactElement, ReactNode, useEffect, useState } from 'react';
import {
    BrowserRouter
  } from "react-router-dom";
import IRoute from '../../interfaces/route';
// @ts-ignore
import Navbar from '../Navbar.tsx';
// @ts-ignore
import LayoutLogic from './Layout.logic.ts';



interface typeLayout{
    children:ReactElement,
    routes:IRoute[]
    
}


const Layout:FC<typeLayout> =({children}) =>{
 const {showNavbar} = LayoutLogic();

    
    return(
        <>
        <React.Suspense>
        {
           showNavbar ? <Navbar/> :''
        }
        <main>{children}</main>
        </React.Suspense>
        </>
    )
}

export default Layout;
