import React, { useEffect, useState } from 'react'
// @ts-ignore
import routes from '../../config/routes.ts';
import IRoute from '../../interfaces/route';
const LayoutLogic = ()=>{

    const [routesArray, setRoutesArray] = useState<IRoute[]>([]);
    const [routesArray1, setRoutesArray1] = useState<string[]>([]);
    const [showNavbar, setShowNavbar] = useState(false);
    const location = window.location.pathname;

    useEffect(() => {
        setRoutesArray([...routes]);
    
        
    }, [routes]);

    useEffect(() => {
        routesArray.forEach(a=>{
            setRoutesArray1((routesArray1)=>{return [...routesArray1, a.path];})
        })
    }, [routesArray])
    
    

    useEffect(() => {
     
        if(routesArray1.includes(window.location.pathname)){
            
            setShowNavbar(true);
        }else{
            setShowNavbar(false);
        }
    }, [routesArray1])
    

    return {showNavbar}

}

export default LayoutLogic;
