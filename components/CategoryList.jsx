"use client";

import React, { useEffect, useState } from "react";
import { getAllCategories } from "../actions/category";

const CategoryList = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			const data = await getAllCategories();
			setCategories(data);
		};

		fetchCategories();
	}, []);

	return (
		<div className="w-full">
			<h2 className="text-2xl font-bold text-white mb-4">
				Liste des catégories
			</h2>
			{categories.length === 0 ? (
				<p className="text-gray-400">Aucune catégorie trouvée.</p>
			) : (
				<ul className="space-y-4">
					{categories.map((category) => (
						<li
							key={category.id}
							className="p-4 bg-gray-800 rounded-md"
						>
							<h3 className="text-lg font-semibold text-white">
								{category.name}
							</h3>
							<p className="text-sm text-gray-400">
								{category.products.length} produit(s)
							</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default CategoryList;
