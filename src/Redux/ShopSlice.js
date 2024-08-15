import { createSlice } from "@reduxjs/toolkit";

const ShopSlice =createSlice(
   { name : "ShopSlice",
initialState :{
    count: 0,
    DarkMood : false,
    products :[],
},
reducers :{
increment:(state,action)=>{
state.count+=1
console.log(action)
},
decrement:(state)=>{
    state.count -=1

},
incrementByValue:(state,action)=>{
    state.count+=action.payload
},
ChangeMood:(state)=>{
    state.DarkMood= !state.DarkMood
},
addProduct:(state,action)=>{
    state.products.push(action.payload)
}

}
   }
    
)
export const {increment,decrement,incrementByValue,ChangeMood,addProduct} = ShopSlice.actions
export default ShopSlice.reducer