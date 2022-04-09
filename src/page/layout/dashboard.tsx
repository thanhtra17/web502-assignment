import React from "react";
import { Link } from "react-router-dom";

 type Prop = {
     
 }

 const Dashboard = (prop: Prop) =>{
     return  (
        <>
        <div className="bg-dark"><h2 className="text-white">Menu admin</h2>
        <p><Link  to={`/admin/product/manager`} className="nav-link text-white">Quản lí sản phẩm</Link></p>
        <p><Link  to={`/admin/product/add`} className="nav-link text-white">Thêm sản phẩm mới</Link></p>
        </div>
        </> 
     )
 }
 export default Dashboard