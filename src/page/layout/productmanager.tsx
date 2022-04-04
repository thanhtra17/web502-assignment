import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../../type/product";

type ProductManagerProps = {
    products: ProductType[];
    onRemove:(id: number) => void
  }

  export const ProductManager = ({products, onRemove}: ProductManagerProps) => {
    return (
    <div>
    <table className="max-w-5xl mx-auto table-auto">
    <thead className="justify-between">
      <tr className="bg-green-600">
        <th className="px-16 py-2">
          <span className="text-gray-100 font-semibold">ID</span>
        </th>
        <th className="px-16 py-2">
          <span className="text-gray-100 font-semibold">Name</span>
        </th>
        <th className="px-16 py-2">
          <span className="text-gray-100 font-semibold">Price</span>
        </th>
        {/* <th className="px-16 py-2">
          <span className="text-gray-100 font-semibold">Time</span>
        </th> */}
        <th className="px-16 py-2">
          <span className="text-gray-100 font-semibold">Setting</span>
        </th>
      </tr>
    </thead>
      <tbody className="bg-gray-200">
    {products?.map((product, index) => {
      return <tr className="bg-white border-b-2 border-gray-200">
        <td className="px-16 py-2 flex flex-row items-center">
            {index + 1}
        </td>
        <td>
          <span className="text-center ml-2 font-semibold">{product.name}</span>
        </td>
        <td className="px-16 py-2">
          <span>{product.price}</span>
        </td>
        {/* <td className="px-16 py-2">
          <span>10:00</span>
        </td> */}
        <td className="px-16 py-2">
          <span className="text-yellow-500 flex">
          <Link to={`/admin/product/${product.id}/edit`} ><svg xmlns="http://www.w3.org/2000/svg"   className="h-5 w-5 text-green-700 mx-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
            </svg>
          </Link>
            
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" onClick={()=>onRemove(product.id)} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </span>
        </td>
      </tr>
      })}
    </tbody>
    </table>
    {/*  */}
    

  </div>
)
}