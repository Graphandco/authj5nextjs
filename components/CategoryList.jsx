"use client";
import { useCategory } from "../context/CategoryContext";

const CategoryList = () => {
	const { categories } = useCategory();

	return (
		<div className="">
			{categories.length === 0 ? (
				<p className="text-white-400">Aucune catégorie trouvée.</p>
			) : (
				<ul className="space-y-4">
					{categories.map((category) => (
						<li
							key={category.id}
							className="flex items-center gap-2"
						>
							<div className="text-lg font-semibold text-white">
								{category.name}
							</div>
							<p className="text-sm text-gray-400 mt-1">
								({category.products.length} produit
								{category.products.length > 1 && "s"})
							</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default CategoryList;
