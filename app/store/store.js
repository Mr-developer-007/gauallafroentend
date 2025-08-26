





import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice"
 import wishReducer from "../store/wishListSlice"

const store=configureStore({
  reducer:{
    cart:cartReducer,
    wish:wishReducer
  }
})


export default store;