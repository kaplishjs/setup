import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function SignUp() {
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    // console.log(e.target);
    setLoginDetail({ ...loginDetail, [e.target.name]: e.target.value });
  };
const handleLogin = () => {
  console.log(loginDetail)
}
  return (
    <div className="login_page col-md-5 mx-auto p-4">
    <h2>Sign-Up Page</h2>
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
    <p>Already have an account? <Link to="/sign-in">sign-in here</Link></p>
    <Button onClick={handleLogin} variant="contained" color="success">
Success
</Button>
  </div>
  )
}

export default SignUp