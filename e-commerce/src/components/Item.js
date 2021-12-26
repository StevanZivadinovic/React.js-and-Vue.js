import React from "react";
import "./../style/categories.scss";
import {BrowserRouter as Router,Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
function Item(props) {
  let navigate = useNavigate();


  // onClick={()=>{useNavigate1.push('/category')}}

  return (
    <div className="categorie" style={{backgroundImage:`url(${props.categorie.img})`}} >
      {/* <img alt="image" src={categorie.img}></img> */}
      <div className="textInfo">
        <h3>{props.categorie.title}</h3>
     
        <button ><Link className="link"  to='/category'>Shop now</Link></button>
       
      </div>
    </div>
  );
}

export default Item;
