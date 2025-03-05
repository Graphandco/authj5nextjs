import React from "react";
import CategoryList from "../../components/CategoryList";
import Link from "next/link";

const CategoriesPage = () => {
	return (
		<>
			<div>CategoriesPage</div>
			<CategoryList />
			<Link href="categories/add">Ajouter</Link>
		</>
	);
};

export default CategoriesPage;
