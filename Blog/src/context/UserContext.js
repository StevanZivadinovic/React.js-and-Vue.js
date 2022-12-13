import { createContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axiosInstance from "../helperFunctions/axiosInstance";

const UserContext = createContext(null);

const UserContextProvider = ({ children, username, password }) => {
    const [dataApp, setData] = useState();

    const [searchParams, setSearchParams] = useSearchParams();
    let token = searchParams.get("token");

    let navigate = useNavigate();

    useEffect(() => {
        fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        
      }),
    })
      .then((res) => {
        return res.json()})
      .then(res=>{
        setData(res);
        if(res.message){
            setInvalidMessage(res.message);
        }else{
            navigate('/blogs');
        }
        
      })

        return () => {};
    }, []);

    return (
        <UserContext.Provider value={dataApp}>{children}</UserContext.Provider>
    );
};

export { UserContextProvider, UserContext };
