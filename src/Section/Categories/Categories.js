import React from "react";
import "./Categories.css";
import DataCategories from "../../Assets/Data/Data";
import { Card1 } from "../../Components";

const Categories = () => {
  return (
    <div className="categories">
      <div className="text-Categories">
        <p>Categories of The Month</p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="containe">
        <div className="row row-cols-md-3">
          {DataCategories.map((item) => (
            <div className="col" key={item.id}>
              <Card1 img={item.img} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
