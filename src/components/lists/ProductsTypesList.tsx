import React from 'react'
import productImg from "../../assets/images/product_img.jpg";
import cartsImg from "../../assets/images/carts_img.jpg";
import ProductsTypesCard from '../cards/ProductsTypesCard';

const PRODUCTS_TYPES_LIST = [
    { name: "Products", img: productImg, link: "/products" },
    { name: "Carts", img: cartsImg, link: "/carts" },
];

function ProductsTypesList() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {PRODUCTS_TYPES_LIST.map(item => {
            return (
                <ProductsTypesCard key={item.name} product={item} />
            )
        })}
    </div>
  )
}

export default ProductsTypesList