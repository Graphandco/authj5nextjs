import React from "react";
import CategoryList from "../../components/CategoryList";
import Link from "next/link";
import CategoryForm from "@/components/CategoryForm";

const CategoriesPage = () => {
	return (
		<>
			<h1>Catégories</h1>
			<CategoryList />
			<h2 className="text-size-h2">Ajouter une catégorie</h2>
			<CategoryForm />
		</>
	);
};

export default CategoriesPage;
