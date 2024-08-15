import React from "react";
import "./Card1.css";
import Btn from "../Btn/Btn";
import { NavLink } from "react-router-dom";

const Card1 = (props) => {
  return (
    <div className="card1">
      <div className="img-card1">
        <img src={props.img} alt="" />
      </div>
      <div className="text-card1">
        <p>{props.title}</p>
      </div>
      <NavLink to="/Shop"><Btn name="Go Shop" /></NavLink>
    </div>
  );
};

export default Card1;
