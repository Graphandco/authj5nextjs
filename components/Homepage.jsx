"use client";
import { useProduct } from "../context/ProductContext";
import ProductsList from "./ProductsList";

const Homepage = () => {
	const { products, removeProduct, toggleTobuy } = useProduct();
	const nbrProduitsToBuy = products.filter((product) => product.tobuy).length;
	const nbrProduitsInCart = products.filter(
		(product) => product.tobuy && product.incart
	).length;

	return (
		<div className="">
			<h1 className="text-3xl">
				Liste de courses ({nbrProduitsInCart}/{nbrProduitsToBuy})
			</h1>
			<ProductsList pageType={"shoppingList"} />
		</div>
	);
};

export default Homepage;
