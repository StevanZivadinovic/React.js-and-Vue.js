import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import "./../style/shoping.scss";

function ShopingCategoryPage(prop) {
  return (
    <div className="mainShoping">
      <Navbar />
      <Announcement />
      <div className="subShoping">
        <div className="filterProducts">
            <span>Filter products </span>
          <select>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>

        <div className="sortProducts">
            <span>Sort products </span>
        <select>
          <option selected>Newest</option>
          <option>Price (asc)</option>
          <option>Price (desc)</option>
        </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ShopingCategoryPage;
