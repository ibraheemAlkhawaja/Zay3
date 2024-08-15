import DataShop from "../../Assets/Data/DataShop";
import { CardShop } from "../../Components";
import { Footer, OurBrand } from "../../Section"
import "./Shop.css";
import React, { useEffect, useState } from "react";

const Shop = () => {
  const [filterType, setFilterType] = useState("all")
  const [filterdArray, setFilterdArray] = useState()

  useEffect(() => {
    if (filterType == "all") {
      setFilterdArray(DataShop)
    } else if (filterType == "mens") {
      const filter = DataShop.filter(item => item.gender == "mens")
      setFilterdArray(filter)
    } else if (filterType == "womens") {
      const filter = DataShop.filter(item => item.gender == "womens")
      setFilterdArray(filter)
    }
  }, [filterType])
  return (
    <>
      <div className="container-fluid shop">
        <div className="row row-cols-sm-2">
          <div className="col-md-3 col-3">
            <div className="Categories">
              <h2>Categories</h2>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gender
                </button>
                <ul class="dropdown-menu">
                  <li onClick={() => { setFilterType("mens") }}>
                    <a class="dropdown-item" >
                      mens
                    </a>
                  </li>
                  <li onClick={() => { setFilterType("womens") }}>
                    <a class="dropdown-item" >
                      womens
                    </a>
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sale
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" >
                      sport
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" >
                      luxury
                    </a>
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" >
                      bag
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" >
                      sweather
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" >
                      sunglass
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-9 ">
            <div className="Categories-filter">
              <div className="text-categories-filter">
                <p onClick={() => { setFilterType("all") }}>all</p>
                <p onClick={() => { setFilterType("mens") }}>mens</p>
                <p onClick={() => { setFilterType("womens") }}>womens</p>
              </div>
              <div className="select-categories-filter">
                <select name="filter" id="fil">
                  <option>Featured</option>
                  <option>A to Z</option>
                  <option>Item</option>
                </select>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row row-cols-md-3 row-cols-1">
                {filterdArray && filterdArray.map((item) => (
                  <div className="col-sm-1" key={item.id}>
                    <CardShop
                      id={item.id}
                      img={item.img}
                      title={item.title}
                      option={item.option}
                      price={item.price}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurBrand />
      <Footer />
    </>
  );
};

export default Shop;
