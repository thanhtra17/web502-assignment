import React from "react";
import { Link } from "react-router-dom";
type Prop = {}

const Nav = (prop: Prop) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="text-center">
   
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={`/`} className="nav-link active mx-3 text-white hover:border-2 border-top-0 border-end-0 border-start-0" aria-current="page" >HOME</Link>
        </li>
        <li className="nav-item">
          <Link  to={`/product`} className="nav-link mx-3 text-white hover:border-2 border-top-0 border-end-0 border-start-0">SHOP</Link>
        </li>
        <li className="nav-item">
          <Link to={`/`} className="nav-link mx-3 text-white hover:border-2 border-top-0 border-end-0 border-start-0" >ABOUT US</Link>
        </li>
      </ul>
    
  </div>
</nav>






    )
}
export default Nav