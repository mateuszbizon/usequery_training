function Homeheader() {
	return (
		<header className='min-h-screen'>
			<div className="main-container flex flex-col items-center">
				<h1 className='text-1 text-center mb-10'>
					DummyJSONApi <br /> reaveled <br /> with useQuery
				</h1>
				<p className='text-dark-1 mb-7 text-center sm:text-lg lg:text-xl'>
					In the DummyJSONApi you can get a different types of data starting with
					user things like users, posts, recipes, quotes and even generate images
					on the fly.{" "}
				</p>
				<a
					href='#products'
					className='py-1 px-4 rounded-full bg-primary-1 text-light-1 w-fit hover:bg-dark-2 transition cursor-pointer'>
					Start now
				</a>
			</div>
		</header>
	);
}

export default Homeheader;
