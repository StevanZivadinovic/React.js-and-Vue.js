import React from "react";
import "./../style/categories.scss";
function Item({ categorie }) {
  console.log(categorie, "hh");
  return (
    <div className="categorie" >
      <img alt="image" src={categorie.img}></img>
      <div className="textInfo">
        <h3>{categorie.title}</h3>
        <button>Shop now</button>
      </div>
    </div>
  );
}

export default Item;
