"use server";

import { db } from "../db";
import { revalidatePath } from "next/cache";

// 📌 Créer une catégorie
export const createCategory = async (formData) => {
	try {
		const category = await db.category.create({
			data: {
				name: formData.get("name"),
			},
		});
		revalidatePath("/categories");
		return category;
	} catch (error) {
		console.error("Erreur lors de la création de la catégorie :", error);
		return { error: "Erreur lors de l'ajout de la catégorie." };
	}
};

// 📌 Récupérer une catégorie par ID
export const getCategoryById = async (id) => {
	try {
		const category = await db.category.findUnique({
			where: { id },
			include: { products: true },
		});
		return category;
	} catch (error) {
		console.error(
			"Erreur lors de la récupération de la catégorie :",
			error
		);
		return null;
	}
};

// 📌 Récupérer toutes les catégories
export const getAllCategories = async () => {
	try {
		const categories = await db.category.findMany({
			include: { products: true },
		});
		return categories;
	} catch (error) {
		console.error("Erreur lors de la récupération des catégories :", error);
		return [];
	}
};

// 📌 Mettre à jour une catégorie
export const updateCategory = async (id, formData) => {
	try {
		const category = await db.category.update({
			where: { id },
			data: {
				name: formData.get("name"),
			},
		});
		revalidatePath("/categories");
		return category;
	} catch (error) {
		console.error("Erreur lors de la mise à jour de la catégorie :", error);
		return { error: "Erreur lors de la modification de la catégorie." };
	}
};

// 📌 Supprimer une catégorie
export const deleteCategory = async (id) => {
	try {
		await db.category.delete({
			where: { id },
		});
		revalidatePath("/categories");
		return { success: true };
	} catch (error) {
		console.error("Erreur lors de la suppression de la catégorie :", error);
		return { error: "Erreur lors de la suppression de la catégorie." };
	}
};
