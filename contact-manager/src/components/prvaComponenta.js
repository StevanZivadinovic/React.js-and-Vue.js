import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function PrvaComponenta() {

    let navigator = useNavigate();
    const [recnik, setRecnik] = useState([]);
    const username = 'steva94';
    const password = 'andjelanole1994'
    const  url = new URL("https://dictapi.lexicala.com/users/me") ;

    url.search = new URLSearchParams({'username':username, 'password':password});
    // url.search = new URLSearchParams(password);
    // let params = new URLSearchParams(url.search);
  
    // params.append("username", username)
    // params.append("password", password);
    console.log(url)


    useEffect(() => {
        fetch('https://dictapi.lexicala.com/users/me?username=steva94&password=andjelanole1994'

           )
            .then((response) => {
              if (response.ok) {
                response.json().then((data) => {
               return data.json()
                });
                
              }
            })
            .then((data)=>{
                console.log(data)
            })
            .catch((error) => {
              console.log(error);
            });
       
      }, [])
    
  return (
    <div>
      <button
        onClick={() => {
          navigator("/treca");
        }}
      >
        PrvaComponenta
      </button>
    </div>
  );
}
