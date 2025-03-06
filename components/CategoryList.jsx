"use client";
import { Trash2 } from "lucide-react";
import { useCategory } from "../context/CategoryContext";
import { toast } from "sonner";

const CategoryList = () => {
	const { categories, removeCategory } = useCategory();

	const handleRemoveCat = (id) => {
		removeCategory(id);
		toast.success("La catégorie a été supprimée.");
	};

	return (
		<div className="">
			{categories.length === 0 ? (
				<p className="text-white-400">Aucune catégorie trouvée.</p>
			) : (
				<ul className="">
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
							<Trash2
								color="var(--destructive"
								size={18}
								className="mt-1 cursor-pointer"
								onClick={() => handleRemoveCat(category.id)}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default CategoryList;
