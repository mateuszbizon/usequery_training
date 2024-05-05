import ProductCard from "../cards/ProductCard"

type Props = {
    products: TProduct[]
}

function ProductsList({ products }: Props) {
  return (
    <div className="grid-container">
      {products?.map(item => {
        return (
          <ProductCard key={item.id} link={`/product/${item.id}`} name={item.title} img={item.thumbnail} />
        )
      })}
    </div>
  )
}

export default ProductsList