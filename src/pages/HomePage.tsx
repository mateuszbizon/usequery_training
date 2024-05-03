import RootLayout from "../components/layouts/RootLayout";
import HomeGradient from "../components/Home/HomeGradient";
import HomeProducts from "../components/Home/HomeProducts";
import Homeheader from "../components/Home/Homeheader";

function HomePage() {
	return (
		<>
			<HomeGradient />
			<Homeheader />
			<HomeProducts />
		</>
	);
}

export default HomePage;
