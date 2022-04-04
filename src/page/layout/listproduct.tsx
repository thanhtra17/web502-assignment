import React from "react";
import Productlist from "../../component/productlist";
import { ProductType } from "../../type/product";

 type ProductsProp = {
     products: ProductType[]
 }

 const ListProduct = (prop: ProductsProp) =>{
     return  (
        <><h2>Danh sách sản phẩm</h2>
        <Productlist products={prop.products} /></> 
     )
 }
 export default ListProduct