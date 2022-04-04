import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import WebsiteLayout from './page/layout/websitelayout'
import "bootstrap/dist/css/bootstrap.min.css"
import { ProductType } from './type/product'
import { create, list, remove, update } from './api/product'
import ProductAdd from './page/layout/productadd'
import ProductDetail from './page/layout/productdetail'
import AdminLayout from './page/layout/adminlayout'
import { ProductManager } from './page/layout/productmanager'
import Signup from './page/layout/signup'
import Productlist from './component/productlist'
import ListProduct from './page/layout/listproduct'
import HomePage from './page/layout/homepage'
import Dashboard from './page/layout/dashboard'
import Signin from './page/layout/signin'
import ProductEdit from './page/layout/productedit'
import { signup } from './api/user'
import { UserType } from './type/user'


function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<ProductType[]>([])


  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data)
    }
    getProducts()
  }, [])


  const onHandleRemove = (id: number) => {
    remove(id);
    // reRender
    setProducts(products.filter(item => item.id !== id))
  }

  const onHandleAdd = async (product: any) => {
    console.log('app.js', product);
    // api
    const { data } = await create(product);
    // reRender
    setProducts([...products, data]);
  }

  const onHandleUpdate = async (product: ProductType) => {

    const { data } = await update(product);

    setProducts([...products, data]);

    // const onHandleSignup = async (user: any) => {
    //       console.log('app.js', user);
    //       // api
    //       const {data} = await signup(user);
    //       // reRender
    //      setProducts([...user, data]);
    //     }     

  }
  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        <Route index element={<HomePage products={products} />} />
        {/* <Route index element={<Productlist products={products} />} /> */}
        <Route path="signup" element={<Signup onAdd={function (user: UserType): void {
          throw new Error('Function not implemented.')
        }} />} />
        <Route path="signin" element={<Signin />} />
        <Route path="product" >
          <Route index element={<ListProduct products={products} />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>






      </Route>'

      '
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="product">
          <Route path="manager" element={<ProductManager products={products} onRemove={onHandleRemove} />} />
          <Route path="add" element={<ProductAdd onAdd={onHandleAdd} name={''} />} />
          <Route path=':id/edit' element={<ProductEdit onUpdate={onHandleUpdate} />} />
        </Route>
      </Route>






    </Routes>
  )
}

export default App
