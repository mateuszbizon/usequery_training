import { Link } from "react-router-dom";

type Props = {
	product: TProductsTypesCard;
};

function ProductsTypesCard({ product }: Props) {
	return (
		<div className='group flex flex-col bg-light-1 rounded-lg max-w-[400px] mx-auto'>
			<div className='p-2 pb-0 w-full min-h-[200px] h-full max-h-[400px]'>
				<img
					src={product.img}
					className='w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all duration-300'></img>
			</div>
			<div className='flex flex-col p-5'>
				<Link
					target='_blank'
					to={product.link}
					className='text-center font-medium text-xl hover:text-primary-1 hover:underline transition-all duration-300'>
					{product.name}
				</Link>
			</div>
		</div>
	);
}

export default ProductsTypesCard;
