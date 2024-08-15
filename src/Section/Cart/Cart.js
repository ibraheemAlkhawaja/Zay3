import { useSelector } from "react-redux"
import "./Cart.css"
const Cart =()=>{
    const products =useSelector(state=> state.ShopSlice.products)
    // const [price,setPrice] =useState(products[0].price)
    // const incrementPrice =()=>{
    //     setPrice(+price + +price )
    // }
    // const [clear ,setClear] =useState(true)
    // const handleClear =()=>{
    //     setClear(!clear)
    // }
    // console.log(clear)
    return(
    <>
    {products && products.map((item)=>( 
    <div className="cart">
    <div className="container-fluid">
        <div className="row row-cols-md-2 row-cols-sm-1">
        {/* // {clear == false ? "row row-cols-md-2 row-cols-sm-1 hide" : "row row-cols-md-2 row-cols-sm-1"} */}
            <div className="col">
                <div className="img-cart">
                    <img src={item.img} />
                </div>
            </div>
            <div className="col">
                <div className="text-cart">
                    <h3>{item.title}</h3>
                    <p> $ {item.price}</p>
                    <div className="btn-cart">
                    <button type="button" class="btn btn-outline-dark">-</button>
                    <button type="button" class="btn btn-outline-dark">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    ))}
    </>)
}
export default Cart