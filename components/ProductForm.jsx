"use client";

import { useProduct } from "../context/ProductContext";
import { Checkbox } from "@/components/ui/checkbox";

const ProductForm = () => {
	const { addProduct, categories } = useProduct();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		await addProduct(formData);
		event.target.reset(); // Réinitialiser le formulaire après ajout
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col gap-4"
			>
				{/* Title */}
				<div>
					<label className="block text-sm font-medium text-gray-200">
						Titre du produit
					</label>
					<input
						type="text"
						placeholder="Nom du produit"
						name="title"
						className="mt-1 w-full px-4 p-2 h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
						required
					/>
				</div>

				{/* Image */}
				<div>
					<label className="block text-sm font-medium text-gray-200">
						Image (URL)
					</label>
					<input
						type="text"
						placeholder="URL de l'image"
						name="image"
						className="mt-1 w-full px-4 p-2 h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
					/>
				</div>

				{/* Sélection de la catégorie */}
				<div>
					<label className="block text-sm font-medium text-gray-200">
						Catégorie
					</label>
					<select
						name="categoryId"
						className="mt-1 w-full px-4 p-2 h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
						required
					>
						<option value="">Sélectionnez une catégorie</option>
						{categories.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</select>
				</div>

				{/* Cases à cocher */}
				<div className="flex flex-col gap-2 mt-5">
					<div className="items-top flex space-x-2">
						<Checkbox
							id="incart"
							type="checkbox"
							name="incart"
							value="true"
						/>
						<div className="grid gap-1.5 leading-none">
							<label
								htmlFor="incart"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Dans le panier
							</label>
						</div>
					</div>

					<div className="items-top flex space-x-2">
						<Checkbox
							id="tobuy"
							type="checkbox"
							name="tobuy"
							value="true"
						/>
						<div className="grid gap-1.5 leading-none">
							<label
								htmlFor="tobuy"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Dans la liste de courses à acheter
							</label>
						</div>
					</div>

					<div className="items-top flex space-x-2">
						<Checkbox
							id="favorite"
							type="checkbox"
							name="favorite"
							value="true"
						/>
						<div className="grid gap-1.5 leading-none">
							<label
								htmlFor="favorite"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Dans les favoris
							</label>
						</div>
					</div>
				</div>

				{/* Bouton de soumission */}
				<div className="mt-4">
					<button
						type="submit"
						className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
					>
						Ajouter le produit
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductForm;
