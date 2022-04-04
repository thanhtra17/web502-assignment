import React from "react";
import { Outlet } from "react-router-dom";
 type Prop = {}

 const AdminLayout = (prop: Prop) =>{
     return  (
         <><div>
                <aside>
                    
                </aside>
                <main>
                    <Outlet />
                </main>

         </div>
         
         
         
         
         </> 
     )
 }
 export default AdminLayout