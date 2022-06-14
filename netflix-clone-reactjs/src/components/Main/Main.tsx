import axios from 'axios';
import React, { useState } from 'react'
import requests from '../../helperFunctions/requests';
const Main = () => {

    const [movies, setMovies] = useState<any>([]);

    axios.get(requests.requestPopular)
    .then(res=>{
        setMovies(res);
    })
    console.log(movies);
  return (
    <div>Main</div>
  )
}

export default Main;