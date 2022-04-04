import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../component/footer";
import Header from "../../component/header";
import Productlist from "../../component/productlist";

type Prop = {}

const WebsiteLayout = (prop: Prop) => {
    return (
        <div className="" >
            <Header />
            <div className="container">
            
                <Outlet />
            </div>
            <Footer />
        </div>

    )
}
export default WebsiteLayout