import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
    product: TProductsTypesCard;
}

function ProductsTypesCard({ product }: Props) {
  return (
    <div className='group flex flex-col bg-light-1 rounded-lg max-w-[400px] mx-auto h-fit'>
        <div className='p-2 pb-0 overflow-hidden'>
            <img src={product.img} width={200} height={200} className='w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all duration-300'></img>
        </div>
        <div className='flex justify-center items-center p-5'> 
            <Link target='_blank' to={product.link} className='text-center font-medium text-xl hover:text-primary-1 hover:underline transition-all duration-300'>{product.name}</Link>
        </div>
    </div>
  )
}

export default ProductsTypesCard