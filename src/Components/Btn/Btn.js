import React from "react";
import "./Btn.css";

const Btn = (props) => {
  return (
    <div className="btn">
      <button type="button" class="btn btn-success">
        {props.name}
      </button>
    </div>
  );
};

export default Btn;
