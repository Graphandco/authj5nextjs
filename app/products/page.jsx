import React from "react";
import ProductList from "../../components/ProductsList";
import Link from "next/link";

const ProductsPage = () => {
	return (
		<div>
			<ProductList />
			<Link href="/products/add">Ajouter</Link>
		</div>
	);
};

export default ProductsPage;
