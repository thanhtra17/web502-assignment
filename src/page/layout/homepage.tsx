import React from "react";
import Banner from "../../component/banner";
import Productlist from "../../component/productlist";
import { ProductType } from "../../type/product";
import "bootstrap/dist/css/bootstrap.min.css"

type HomePageProp = {
    products: ProductType[]
}

const HomePage = (prop: HomePageProp) => {
    return (
        <>
            <><Banner />
                <Productlist products={prop.products} /></>
            <div className="row align-items-center">
                <div className="col-sm-6 ">
                    <div className="">
                        <img className="w-25 " src="" alt="" />
                    </div>
                </div>
                <div className="col-sm-6 ">
                    <div className="">
                        <img className="w-25 " src="" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}
export default HomePage