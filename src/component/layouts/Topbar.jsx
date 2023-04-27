import React from "react";
import { Outlet, Link } from "react-router-dom";
function Topbar() {
  return (
    <div>
      <ul className="topBar">
        <li>
          <Link className="active" to="/">
            Home
          </Link>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <Link to="/sign-in">Login</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign-up</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
}

export default Topbar;
