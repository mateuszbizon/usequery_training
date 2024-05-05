import { Link } from "react-router-dom";

type Props = {
	link: string;
	img: string;
	name: string;
};

function ProductCard({ link, img, name }: Props) {
	return (
		<Link to={link} target="_blank" className='bg-light-1 rounded-lg h-fit'>
			<div className='w-full h-[250px] rounded-t-lg'>
				<img
					src={img}
					className='w-full h-full object-cover'></img>
			</div>
			<div className='p-5'>
				<p
					className='text-center font-medium text-xl'>
					{name}
				</p>
			</div>
		</Link>
	);
}

export default ProductCard;
