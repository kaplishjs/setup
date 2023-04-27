import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBlogs } from '../redux/slices/blogSlice'

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(()=>{
       dispatch(fetchBlogs()).unwrap();
    }
    ,[]);



  const {blogs} = useSelector((state)=>({blogs : state.blogData}));
  console.log(blogs)

  return (
    blogs.isFetch?'loading...':
    blogs.blogData.map(el=><div style={{"color":"red"}}><span>{el.title}</span></div>)
  )
}

export default Dashboard