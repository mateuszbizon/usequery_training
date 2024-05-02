import React from 'react'
import ProductsTypesList from './lists/ProductsTypesList'

function HomeProducts() {
  return (
    <section id='products' className='bg-light-2 px-3 py-5'>
        <ProductsTypesList />
    </section>
  )
}

export default HomeProducts