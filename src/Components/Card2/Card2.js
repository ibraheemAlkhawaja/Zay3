import "./Card2.css";
import React from "react";
import { LiaStarSolid } from "react-icons/lia";

const Card2 = (props) => {
  return (
    <div className="cards2">
      <div className="card2">
        <div className="img-card2">
          <img src={props.img} alt="" />
        </div>
        <div className="content-card2">
          <div className="stars">
            <LiaStarSolid color="gold" size={25} />
            <LiaStarSolid color="gold" size={25} />
            <LiaStarSolid color="gold" size={25} />
            <LiaStarSolid color="gold" size={25} />
            <LiaStarSolid color="gold" size={25} />
          </div>
          <div className="price">${props.price}</div>
        </div>
        <div className="text-card2">
          <p>{props.title}</p>
          <p>{props.desc}</p>
          <p>Reviews ({props.Reviews})</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
