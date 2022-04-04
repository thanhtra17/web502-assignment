import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import { read } from "../../api/product";
import { ProductType } from "../../type/product";

type ProductAddProps = {
    // name:string,
    onUpdate: (product: ProductType) =>void
}

type Inputs = {
    name: string,
    price: number
};


const ProductEdit = (props:  ProductAddProps) =>{
    const { id } = useParams()
    const { register, handleSubmit , formState:{errors}, reset} = useForm<Inputs>()
    
    useEffect(() =>{
        const getProduct = async () =>{
            const { data } = await read(id)
            reset(data)
        }
        getProduct()
    },[id])


    const onSubmit: SubmitHandler<Inputs>  = (data) => {
        console.log(id)
        console.log(data); // 
        props.onUpdate(data);

       
    }
    return (
        <div>
            {/* <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('name')} placeholder="tên sp" />
                <input type="number" {...register('price')} placeholder="giá sp" />
                <button>Sửa</button>
            </form> */}
            {/*  */}
    <form id="edit" onSubmit={handleSubmit(onSubmit)} className="mx-5">
  <h1 className="font-bold">Sửa sản phẩm</h1>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
    <input  type="text" {...register('name')} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  {/* <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Desc</label>
    <input  type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div> */}
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
    <input  type="text" {...register('price')} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  {/* <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
    <input  type="file" id="img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div> */}
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

            {/*  */}
        </div>
    )
}
export default ProductEdit