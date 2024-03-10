import { configureStore } from "@reduxjs/toolkit";
import postReducres from "../features/postSlice";


let store=configureStore({
    reducer:{
        post:postReducres,
    }
})



export default store;