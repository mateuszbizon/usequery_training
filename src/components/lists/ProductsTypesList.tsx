import React from 'react'
import productImg from "../../assets/images/product_img.jpg";
import cartsImg from "../../assets/images/carts_img.jpg";

const PRODUCTS_TYPES_LIST = [
    { name: "Products", img: productImg, link: "/products" },
    { name: "Carts", img: cartsImg, link: "/carts" },
];

function ProductsTypesList() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {PRODUCTS_TYPES_LIST.map(item => {
            return (
                <div className='group flex flex-col bg-light-1 rounded-lg max-w-[400px] mx-auto h-fit'>
                    <div className='p-2 pb-0 overflow-hidden'>
                        <img src={item.img} width={200} height={200} className='w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all duration-300'></img>
                    </div>
                    <div className='flex justify-center items-center p-5'> 
                        <a href={item.link} className='text-center font-medium text-xl hover:text-primary-1 hover:underline transition-all duration-300'>{item.name}</a>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ProductsTypesList