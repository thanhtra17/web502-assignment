import React from "react";
import { Link } from "react-router-dom";
type Prop = {}

const Nav = (prop: Prop) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={`/`} className="nav-link active text-white" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link  to={`/product`} className="nav-link text-white">Shop</Link>
        </li>
        <li className="nav-item">
          <Link to={`/signin`} className="nav-link text-white" >SignIn</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}
export default Nav