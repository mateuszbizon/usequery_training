type Props = {
    products: TProduct[]
}

function ProductsList({ products }: Props) {
    console.log(products)
  return (
    <div>ProductsList</div>
  )
}

export default ProductsList