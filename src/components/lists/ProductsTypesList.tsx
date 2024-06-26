import productImg from "../../assets/images/product_img.jpg";
import cartsImg from "../../assets/images/carts_img.jpg";
import usersImg from "../../assets/images/users_img.jpg";
import postsImg from "../../assets/images/posts_img.jpg";
import commentsImg from "../../assets/images/comments_img.jpg";
import quotesImg from "../../assets/images/quotes_img.jpg";
import recipesImg from "../../assets/images/recipes_img.jpg";
import todosImg from "../../assets/images/todos_img.jpg";
import ProductCard from "../cards/ProductCard";

const PRODUCTS_TYPES_LIST = [
	{ name: "Products", img: productImg, link: "/products" },
	{ name: "Carts", img: cartsImg, link: "/carts" },
	{ name: "Users", img: usersImg, link: "/users" },
	{ name: "Posts", img: postsImg, link: "/posts" },
	{ name: "Comments", img: commentsImg, link: "/comments" },
	{ name: "Quotes", img: quotesImg, link: "/quotes" },
	{ name: "Recipes", img: recipesImg, link: "/recipes" },
	{ name: "Todos", img: todosImg, link: "/todos" },
];

function ProductsTypesList() {
	return (
		<div className='grid-container'>
			{PRODUCTS_TYPES_LIST.map(item => {
				return <ProductCard key={item.name} link={item.link} img={item.img} name={item.name} />;
			})}
		</div>
	);
}

export default ProductsTypesList;
