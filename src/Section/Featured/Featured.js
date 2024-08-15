import { DataFeatured } from "../../Assets/Data/Data";
import { Card2 } from "../../Components";
import "./Featured.css";
import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      <div className="text-featured">
        <p>Featured Product</p>
        <p>
          Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>
      <div className="container">
        <div className="row row-cols-md-3">
          {DataFeatured.map((item) => (
            <div className="col" key={item.id}>
              <Card2
                img={item.img}
                price={item.price}
                title={item.title}
                desc={item.description}
                Reviews={item.Reviews}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
