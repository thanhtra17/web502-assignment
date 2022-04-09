import React from "react";
import { ProductType } from "../type/product";
type ProductlistProp = {
    products: ProductType[]
}

const Productlist = ({products}: ProductlistProp) => {
    return (

        <div>
            <div className="row">
                {products?.map((product, index) =>{
                    return (
                        <div className="col-3" key={index}>
                    <div className="card" style={{ width: '18rem' }}>
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.price}</p>
                            <a href={`/product/${product._id}`} className="btn btn-primary">Chi tiết sản phẩm</a>
                        </div>
                    </div>

                </div>
                    )
                })}
                

                
                
            </div>
        </div>
    )
}
export default Productlist