import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api"
import RootLayout from "../components/layouts/RootLayout";
import ProductsList from "../components/lists/ProductsList";

function ProductsPage() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: () => getProducts(),
    })

  return (
    <RootLayout>
        <h1 className="text-1 text-center text-line">Products</h1>
        <ProductsList products={data?.products} />
    </RootLayout>
  )
}

export default ProductsPage