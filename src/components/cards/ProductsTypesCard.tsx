import { Link } from "react-router-dom";

type Props = {
	product: TProductsTypesCard;
};

function ProductsTypesCard({ product }: Props) {
	return (
		<Link to={product.link} target="_blank" className='bg-light-1 rounded-lg h-fit'>
			<div className='w-full h-[250px] rounded-t-lg'>
				<img
					src={product.img}
					className='w-full h-full object-cover'></img>
			</div>
			<div className='p-5'>
				<p
					className='text-center font-medium text-xl'>
					{product.name}
				</p>
			</div>
		</Link>
	);
}

export default ProductsTypesCard;
