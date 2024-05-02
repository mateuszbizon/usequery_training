import React from 'react'

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
            <a href={product.link} className='text-center font-medium text-xl hover:text-primary-1 hover:underline transition-all duration-300'>{product.name}</a>
        </div>
    </div>
  )
}

export default ProductsTypesCard