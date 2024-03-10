
import { useEffect } from "react";
import React from "react";
import { fetchPosts } from "../redux/features/postSlice";
import { useDispatch, useSelector } from "react-redux";


const PostApp=()=>{
let posts=useSelector((data)=>{
    console.log(data.post.data)
   return data.post.data;
})

    let dispatch=useDispatch()
useEffect(()=>{
   dispatch(fetchPosts())
},[dispatch])
console.log(posts)
    return(
        <div>
            {posts&&posts.map((post)=>(<div>
                <h1>{post.title}</h1>
                <h4>{post.body}</h4>
            </div>))}
        </div>
    )
}

export default PostApp;