import React, { useState, useEffect } from "react";
import "./../style/slider.scss";
import fashion1 from "./../img/fashion1.png";
import fashion2 from "./../img/fashion2.png";
import fashion3 from "./../img/fashion3.png";
import { useNavigate } from "react-router-dom";

const Slider = ({ getTypeOfCollection }) => {
  const [a, setA] = useState(0);
  const [seasson, setSeasson] = useState("summer");
  const navigate = useNavigate();

  const images = [
    {
      image: fashion1,
      seasson: "summer",
      subText:
        "Discover the latest styles of sundresses, crop tops, sandals and sunhats online now....",
    },
    {
      image: fashion2,
      seasson: "autumn",
      subText:
        "Our fresh edit of autumn clothes includes everything from staple jumper dresses and oversized sweaters to leather look trousers",
    },
    {
      image: fashion3,
      seasson: "winter",
      subText: "Discover our new Winter clothing in various colors and sizes",
    },
  ];

  const handleNavigate = (seasson) => {
    navigate("/cart");
    setSeasson(seasson);
    localStorage.setItem("seasson", seasson);
  };

  const handleLeft = () => {
    if (a > 0) {
      setA(a - 1);
    } else {
      setA(2);
    }
  };

  const handleRight = () => {
    if (a < 2) {
      setA(a + 1);
    } else {
      setA(0);
    }
  };

  useEffect(() => {
    document.querySelector(".wrapper").style.transform = `translateX(${
      a * -100
    }vw)`;
  }, [a]);

  return (
    <div className="mainSlider">
      <div className="arrows">
        <span
          className="arrow left"
          onClick={() => {
            handleLeft();
          }}
        >
          <i className="fas fa-arrow-left"></i>
        </span>
        <div className="wrapper">
          {images.map((a, i) => {
            return (
              <div className="slide" key={i}>
                <div className="imageContainer">
                  <img src={a.image} />
                </div>
                <div className="infoContainer">
                  <div className="title">{`${a.seasson} sale`}</div>
                  <div className="textInfo">{a.subText}</div>
                  <button
                    className="button"
                    onClick={(seasson) => {
                      handleNavigate(a.seasson);
                    }}
                  >
                    Show now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <span
          className="arrow right"
          onClick={() => {
            handleRight();
          }}
        >
          <i className="fas fa-arrow-right"></i>
        </span>
      </div>
    </div>
  );
};

export default Slider;
