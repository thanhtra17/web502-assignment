import React from "react";
import Productlist from "../../component/productlist";
import { ProductType } from "../../type/product";

type ProductsProp = {
    products: ProductType[]
}

const ListProduct = (prop: ProductsProp) => {
    return (
        <>   
        <div className="row my-5 ">
            <div className="col-sm-4">
                
                    <div className="">
                        <h3 className=" border-dark border-2 border-top-0 border-end-0 border-start-0 mb-4 text-left">Danh mục</h3>
                    </div>
                
                <aside className="">
                    <div className="ml-40">
                        <input type="checkbox" name="" id="" /> Tshirt <br />
                        <input type="checkbox" name="" id="" /> Jacket <br />
                        <input type="checkbox" name="" id="" /> Sweater <br />
                        <input type="checkbox" name="" id="" /> Pant <br />
                        <input type="checkbox" name="" id="" /> Accessories <br />
                    </div>
                </aside>
            </div>
            <div className="col-sm-8">
                <h3 className="border-dark border-2 border-top-0 border-end-0 border-start-0 mb-4" >Tất cả sản phẩm</h3>
                <div className="">
                <Productlist products={prop.products} />
                </div>
                
            </div>
                
            
        </div>
        </>
    )
}
export default ListProduct