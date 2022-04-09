import React from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";
import Search from "./search";
type Prop = {}

const Header = (prop: Prop) => {
    return (
        <><header className="" >
            <div className="container-fluid bg-dark w-100  ">
                <div className="row align-items-center">
                    <div className="col-sm-4 ">
                        <div className="">
                            <img className="w-25 " src="./src/img/logo-goldie.jpeg" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-4 ">
                        <div>
                            <nav className="navbar navbar-expand-lg navbar-light  ">
                                    <div className="mx-auto " id="navbarSupportedContent">
                                        <div className="col mx-auto"><Nav /></div>
                                    </div>
                            </nav>

                        </div>
                    </div>
                    <div className="col-sm-4 text-center">
                       
                        <Link to={''}><i className="fa-solid mx-3  text-white fa-magnifying-glass" ></i></Link>
                        <Link to={'/signin'}><i className="fa-solid mx-3 text-white fa-user "></i></Link>
                        <Link to={''}><i className="fa-solid mx-3 text-white fa-cart-shopping"></i></Link>
                    </div>
                    
                </div>
            </div>

            {/*  */}
            <div className="">


            </div>
        </header>
        </>

    )
}
export default Header