import React, { useEffect, useState } from 'react'
// @ts-ignore
import routes from '../../config/routes.ts';
import IRoute from '../../interfaces/route';
const LayoutLogic = ()=>{

    const [routesArray, setRoutesArray] = useState<IRoute[]>([]);
    const [routesArray1, setRoutesArray1] = useState<string[]>([]);
    const [showNavbar, setShowNavbar] = useState(false);
    const location = window.location.pathname;
    console.log(routes)

    useEffect(() => {
        setRoutesArray([...routes]);
    
        
    }, [routes]);

    useEffect(() => {
        routesArray.forEach(a=>{
            setRoutesArray1((routesArray1)=>{return [...routesArray1, a.path];})
        })
    }, [routesArray])
    
    console.log(routesArray1);

    useEffect(() => {
     
        if(routesArray1.includes(window.location.pathname)){
            
            setShowNavbar(true);
        }else{
            setShowNavbar(false);
        }
    }, [routesArray1])
    console.log(showNavbar);

    return {showNavbar}

}

export default LayoutLogic;
