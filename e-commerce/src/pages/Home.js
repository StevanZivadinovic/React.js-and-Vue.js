import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories.js";
import Products from "../components/Products";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";

function Home() {




  
  return (
    <div className="mainHome">
      <Navbar />
      <Announcement />
      <Slider/>
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
