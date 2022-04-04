import React from "react";
import Nav from "./nav";
import Search from "./search";
type Prop = {}

const Header = (prop: Prop) => {
    return (
        <header>
            <div className="container-fluid bg-dark w-100">
                <div className="row align-items-center">
                    <div className="col-sm-4 ">
                        <div className="">
                            <img className="w-25 " src="./src/img/logo-goldie.jpeg" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div>
                            <nav className="navbar navbar-expand-lg navbar-light  ">
                                <div className="container-fluid">
                                    
                                    <div className="row align-items-center gx-5 " id="navbarSupportedContent">
                                        <div className="col"><Nav /></div>
                                        <div className="col" ><Search /></div>

                                    </div>
                                </div>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="">


            </div>
        </header>
    )
}
export default Header