import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./../style/pagination.scss";

export const Pagination = ({ postPerPage, totalPosts, handleCurrentPage }) => {
  const pageNumbers = [];
  const [posts, setPosts] = useState();

  useEffect(() => {
    setPosts(totalPosts);
  });

  const paginationList=useRef(null);
  
  let average = Math.ceil(totalPosts.length / postPerPage);
  for (let i = 1; i <= average; i++) {
    pageNumbers.push(i);
  }
 
  
  const handleActive = (e)=>{
    let listOfPages=Array.from(paginationList.current.children);
    
    listOfPages.forEach(a=>{
      if(a.tagName=='LI'){
        a.classList.remove('active')
      }
    })
    e.target.classList.add('active')
  }

 
  
  

  return (
    <div className="paginationDiv">
      <ul ref={paginationList} className="paginationList" style={{ height: "2rem", color: "red" }}>
        {pageNumbers.length &&
          pageNumbers?.map((a, i) => {
            return (
              <li  className="paginationItem"  key={i} onClick={(e) => {handleCurrentPage(i + 1); handleActive(e)}}>
                {i + 1}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
