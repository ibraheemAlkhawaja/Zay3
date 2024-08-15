import { NavLink, useLocation, useParams } from "react-router-dom";
import "./SingleProduct.css"
import { useEffect, useState } from "react";
import DataShop from "../../Assets/Data/DataShop";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, increment } from "../../Redux/ShopSlice";

const SingleProduct = () => {
    // const location =useLocation()
    const params =useParams()
    const [singleProduct ,setSingleproduct] =useState()
    useEffect(()=>{
console.log(singleProduct)
        const filter = DataShop.filter((item)=>item.id == params.p)
        setSingleproduct(...filter)
    },[singleProduct])
    const dispatch =useDispatch()
    const products =useSelector(state=> state.ShopSlice.products)
    useEffect(()=>{
        console.log(products)
    },[products])
    return (    
        <>
            <div className="singleproduct">
                <div className="container content-singleproduct">
                    <div className="row row-cols-md-2 row-cols-sm-2">
                        <div className="col col-sm-1">
                            <div className="img-singleproduct">
                                <img src={singleProduct && singleProduct.img}/>
                            </div>
                        </div>
                        <div className="col col-sm-1">
                            <div className="text-singelproduct">
                                <p>{singleProduct && singleProduct.gender}</p>
                                <h3>{singleProduct && singleProduct.title}</h3>
                                <p>rating  89 </p>
                                <p>${singleProduct && singleProduct.price}</p>
                                <p>{singleProduct && singleProduct.option}
                                </p>
                                <div className="btn-sinleproduct">
                                    <button type="button" class="btn btn-outline-secondary" onClick={()=>{dispatch(addProduct(singleProduct))
                                        dispatch(increment(1))
                                    }}>add to card</button>
                                    <button type="button" class="btn btn-outline-secondary"><NavLink to="/cart">go to card</NavLink>    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SingleProduct;