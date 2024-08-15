import "./OurService.css";
import React from "react";
import { FaTruck } from "react-icons/fa6";
import { AiOutlinePercentage } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";

const OurService = () => {
  return (
    <div className="ourservice">
      <div className="text-oursevice">
        <p>Our Services</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="container-fluid">
        <div className="row row-cols-md-4 row-cols-sm-1">
          <div className="col">
            <div className="box">
              <FaTruck size={70} />
              <h4>Delivery Services</h4>
            </div>
          </div>
          <div className="col">
            <div className="box">
              <VscArrowSwap size={70} />
              <h4>Shipping & Return</h4>
            </div>
          </div>
          <div className="col">
            <div className="box">
              <AiOutlinePercentage size={70} />
              <h4>Promotion</h4>
            </div>
          </div>
          <div className="col">
            <div className="box">
              <IoPersonSharp size={70} />
              <h4>24 Hours Service</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
