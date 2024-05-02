import React from 'react'
import ProductsTypesList from './lists/ProductsTypesList'

function HomeProducts() {
  return (
    <section id='products' className='section bg-light-2'>
        <h2 className='text-2 text-line text-center mb-12'>Products</h2>
        <ProductsTypesList />
    </section>
  )
}

export default HomeProducts