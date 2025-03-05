"use client";

import React from "react";
import { createCategory } from "../actions/category";

const CategoryForm = () => {
	return (
		<div>
			<form
				action={createCategory}
				className="w-full flex flex-col gap-4"
			>
				{/* Name */}
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
					<button
						type="submit"
						className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
					>
						Ajouter la catégorie
					</button>
				</div>
			</form>
		</div>
	);
};

export default CategoryForm;
