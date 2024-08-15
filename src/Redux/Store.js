import { configureStore } from "@reduxjs/toolkit";
import ShopSlice from "./ShopSlice";

const Store=configureStore(
    {
        reducer:{
ShopSlice:ShopSlice
        }
    }
)
export default Store