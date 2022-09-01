import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../style/pagination.scss";

export const Pagination = ({ postPerPage, totalPosts, handleCurrentPage }) => {
  const pageNumbers = [];
  const [posts, setPosts] = useState();

  useEffect(() => {
    setPosts(totalPosts);
  });

  let average = Math.ceil(totalPosts.length / postPerPage);
  for (let i = 1; i <= average; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="paginationList" style={{ height: "2rem", color: "red" }}>
        {pageNumbers.length &&
          pageNumbers?.map((a, i) => {
            return (
              <li key={i} onClick={() => handleCurrentPage(i + 1)}>
                {i + 1}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
