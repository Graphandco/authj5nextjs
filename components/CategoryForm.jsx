"use client";

import React from "react";
import { useCategory } from "../context/CategoryContext"; // Utilisation du contexte Category
import { toast } from "sonner";
import { Button } from "./ui/button";

const CategoryForm = () => {
	const { addCategory } = useCategory(); // Récupération de la fonction addCategory

	// Gestion de la soumission du formulaire
	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		console.log(formData);
		await addCategory(formData); // Ajoute la catégorie via le contexte
		toast.success(`La catégorie a été créée.`);
		event.target.reset(); // Réinitialisation du formulaire après ajout
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit} // Utilisation de handleSubmit
				className="w-full flex flex-col gap-4"
			>
				{/* Nom de la catégorie */}
				<div>
					<label className="block text-sm font-medium text-gray-200">
						Nom de la catégorie
					</label>
					<input
						type="text"
						placeholder="Nom de la catégorie"
						name="name"
						className="mt-1 w-full px-4 p-2 h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
						required
					/>
				</div>

				{/* Bouton de soumission */}
				<div className="mt-4">
					<Button type="submit" className="w-full ">
						Ajouter la catégorie
					</Button>
				</div>
			</form>
		</div>
	);
};

export default CategoryForm;
