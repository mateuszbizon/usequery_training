import ProductsTypesList from "../lists/ProductsTypesList";

function HomeProducts() {
	return (
		<section id='products' className='bg-light-2'>
			<div className="main-container">
				<h2 className='text-2 text-line text-center mb-12'>Products</h2>
				<ProductsTypesList />
			</div>
		</section>
	);
}

export default HomeProducts;
