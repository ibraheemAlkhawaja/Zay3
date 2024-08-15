import { useDispatch, useSelector } from "react-redux";
import { Btn } from "../../Components";
import "./Footer.css";
import React from "react";
import { ChangeMood, decrement, increment, incrementByValue } from "../../Redux/ShopSlice";

const Footer = (props) => {
  const mood =useSelector(state =>state.ShopSlice.DarkMood)
  const dispatch = useDispatch()
  return (
    <div className={mood == true ?"footer light" : "footer dark"}>
      <div className="container footer-text">
        <div className="row row-cols-md-3 row-cols-sm-1">
          <div className="col">
            <div className="content-footer">
              <p>
                <span>Zay Shop</span>
              </p>
              <p> 123 Consectetur at ligula 10660</p>
              <p> 010-020-0340</p>
              <p>info@company.com</p>
            </div>
          </div>
          <div className="col">
            <div className="content-footer">
              <p className="center">Products</p>
              <p onClick={()=>dispatch(ChangeMood())}>Luxury</p>
              <p>Sport Wear</p>
              <p>Men's Shoes</p>
              <p>Women's Shoes</p>
              <p>Popular Dress</p>
              <p>Gym Accessories</p>
              <p>Sport Shoes</p>
            </div>
          </div>
          <div className="col">
            <div className="content-footer">
              <p className="center">Further Info</p>
              <p>Home</p>
              <p>About Us</p>
              <p>Shop Locations</p>
              <p>FAQs</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-ceneter">
        <div className="row row-cols-md-2">
          <div className="col">
            <div className="icons-footer"></div>
            <div className="col">
              <div classnName="email-footer">
                <input
                  type="text"
                  className="footer-email"
                  placeholder="Email address"
                />
                <Btn name="Subscribe" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
