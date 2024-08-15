// import Swiper from "swiper";
import "./OurBrand.css";
import React from "react";
import img1 from "../../Assets/img/brand_01.png";
import img2 from "../../Assets/img/brand_02.png";
import img3 from "../../Assets/img/brand_03.png";
import img4 from "../../Assets/img/brand_04.png";
const OurBrand = () => {
  return (
    <div className="ourbrand">
      <div className="content-ourbrand">
        <p>Our Brands</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="swiper-brand">
        <div className="img-brand">
          <img src={img1} alt="" />
        </div>
        <div className="img-brand">
          <img src={img2} alt="" />
        </div>
        <div className="img-brand">
          <img src={img3} alt="" />
        </div>
        <div className="img-brand">
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurBrand;
