import { createContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
    const [dataApp, setData] = useState();
    const [invalidMessage, setInvalidMessage] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    let token = searchParams.get("token");

    let navigate = useNavigate();

    const getRequest = (username, password) =>{
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
       localStorage.setItem('id', res.id);
        console.log(res);
        if(res.message){
            setInvalidMessage(res.message);
        }else{
            navigate('/blogs');
        }
        
      })
    }
    useEffect(() => {
        

        return () => {};
    }, []);

    return (
        <UserContext.Provider value={{dataApp, getRequest, invalidMessage}}>{children}</UserContext.Provider>
    );
};

export { UserContextProvider, UserContext };
