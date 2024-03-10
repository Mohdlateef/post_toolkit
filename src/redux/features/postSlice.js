import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

let intialState={
    loading:false,
    data:[],
    error:[],
}

let post=createSlice({
name:"post",
initialState:intialState,
reducers:{
    ApiStart:(state)=>{state.loading=true},
    
    ApiSucess:(state,action)=>{
       state.loading=false;
       state.data=action.payload;
       state.error=[];
    },
    ApiFaliure:(state,action)=>{
      state.loading=false;
      state.data=[];
      state.error=action.payload;
    }
}
})

export let{ApiStart,ApiSucess,ApiFaliure}=post.actions
console.log(post.actions.ApiStart())
const postReducres=post.reducer
export function fetchPosts(){
    return async (dispatch)=>{
dispatch(post.actions.ApiStart());
try{
    const response=await axios.get("https://gauravgitacc.github.io/postAppData/posts.json");
dispatch(ApiSucess(response.data));
} catch(error){
dispatch(ApiFaliure(error));
}
    }
}
export default postReducres;