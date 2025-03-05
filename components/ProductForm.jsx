"use client";

import React from "react";
import { useProduct } from "../context/ProductContext";

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
				<div className="flex flex-col gap-2">
					<label className="flex items-center text-sm text-gray-200">
						<input
							type="checkbox"
							name="incart"
							value="true"
							className="mr-2"
						/>
						Dans le panier
					</label>
					<label className="flex items-center text-sm text-gray-200">
						<input
							type="checkbox"
							name="tobuy"
							value="true"
							className="mr-2"
						/>
						À acheter
					</label>
					<label className="flex items-center text-sm text-gray-200">
						<input
							type="checkbox"
							name="favorite"
							value="true"
							className="mr-2"
						/>
						Favori
					</label>
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
