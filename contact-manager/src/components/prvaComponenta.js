import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function PrvaComponenta() {

    let navigator = useNavigate();
    const [recnik, setRecnik] = useState([]);
    // const username = 'steva94';
    // const password = 'andjelanole1994'
    // const  url = new URL("https://dictapi.lexicala.com/languages") ;

    // url.search = new URLSearchParams({'username':username, 'password':password});
    // // url.search = new URLSearchParams(password);
    // // let params = new URLSearchParams(url.search);
  
    // // params.append("username", username)
    // // params.append("password", password);
    // console.log(url)


    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'lexicala1.p.rapidapi.com',
        'X-RapidAPI-Key': 'd3d8416290mshe8f889303ad46e5p16190ajsn798c21993e0d'
      }
    };
    useEffect(()=>{
      fetch('https://lexicala1.p.rapidapi.com/search?source=global&language=ru', options)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          setRecnik(response)
        })
        .catch(err => console.error(err));
    },[])
    
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
