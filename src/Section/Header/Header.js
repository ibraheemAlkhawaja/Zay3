import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/img/apple-icon.png";
import Links from "../../Assets/Data/Links";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const count =useSelector(state => state.ShopSlice.count)
  const li = Links.map((item)=>(<li class="nav-item" key={item.id}>
    <NavLink to={item.to}>{item.name}</NavLink>
  </li>))
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            {li}

            <div className="icons">
              <ul className="content-icons">
                {/* <li class="nav-item">
                  <NavLink to= "/Search">
                    <FaSearch size={18} />
                  </NavLink>
                </li> */}
                <li class="nav-item">
                  <NavLink to="/Cart">
                    <FaCartArrowDown size={20} />
                    <div className="count">
                    <p>{count}</p>
                    </div>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to= "/login">
                    <IoPersonSharp size={20} />
                  </NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;





            {/* <li class="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/About">About</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/Shop">shop</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/Contact">Contact</NavLink>
            </li> */}