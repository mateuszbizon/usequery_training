import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api"

function ProductsPage() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: () => getProducts(),
    })

    console.log(data);

  return (
    <div>ProductsPage</div>
  )
}

export default ProductsPage