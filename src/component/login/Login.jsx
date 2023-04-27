import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {login } from "../redux/slices/loginSlice";

function Login() {
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });
useEffect(()=>{
//  dispatch(fetchBlogs(1))
},[])
  const dispatch = useDispatch()
  const {login, blogs} = useSelector((state)=>({login : state.login}))
  console.log("selector, blogs", login, blogs)
  const handleChange = (e) => {
    // console.log(e.target);
    setLoginDetail({ ...loginDetail, [e.target.name]: e.target.value });
  };
const handleLogin = () => {
  // console.log(loginDetail)
  dispatch(login(loginDetail))
}
  return (
    <div className="login_page col-md-5 mx-auto p-4">
      <h2>Login Page</h2>
      <TextField
        value={loginDetail.email}
        className="inputField mb-3"
        id="standard-basic"
        label="Email"
        name="email"
        onChange={handleChange}
        variant="standard"
      />
      <TextField
        value={loginDetail.password}
        id="standard-basic"
        className="inputField mb-3"
        name="password"
        label="Password"
        onChange={handleChange}
        variant="standard"
      />
      <p>dont have an account? <Link to="/sign-up">sign-up here</Link></p>
      <Button onClick={handleLogin} variant="contained" color="success">
  Success
</Button>

    </div>
  );
}

export default Login;
