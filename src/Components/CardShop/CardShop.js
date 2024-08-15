import "./CardShop.css";
import { LiaStarSolid } from "react-icons/lia";
import img1 from "../../Assets/img/shop_01.jpg";
import { useNavigate } from "react-router-dom";
const CardShop = (props) => {
  const navigate =useNavigate()
  const onClick=()=>{
    navigate(`/${props.id}` , {
      state : {
        ID : props.id
      }
    })
  }
  return (
    <>
      <div className="cardshop">
        <div class="card" style={{ width: "18rem;" }}>
          <div className="img-cardshop">
          <img src={props.img} class="card-img-top" alt="..." />
          </div>
          <div class="card-body">
            <p class="card-text">{props.title}</p>
            <p className="card-option">{props.option}</p>
            <div className="stars-shop">
              <LiaStarSolid color="gold" size={20} />
              <LiaStarSolid color="gold" size={20} />
              <LiaStarSolid color="gold" size={20} />
              <LiaStarSolid color="#bcbcbc" size={20} />
              <LiaStarSolid color="#bcbcbc" size={20} />
            </div>
            <p>${props.price}</p>
            <button onClick={onClick}>buy now</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardShop;
