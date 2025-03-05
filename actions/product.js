"use server";

import { db } from "../db";
import { revalidatePath } from "next/cache";

// 📌 Créer un produit
export const createProduct = async (formData) => {
	try {
		const product = await db.product.create({
			data: {
				title: formData.get("title"),
				incart: formData.get("incart") === "true",
				tobuy: formData.get("tobuy") === "true",
				favorite: formData.get("favorite") === "true",
				categoryId: formData.get("categoryId"),
				image: formData.get("image") || "",
			},
		});
		revalidatePath("/products");
		return product;
	} catch (error) {
		console.error(error);
		return { error: "Erreur lors de la création du produit." };
	}
};

// 📌 Récupérer un produit par ID
export const getProductById = async (id) => {
	try {
		const product = await db.product.findUnique({
			where: { id },
			include: { category: true },
		});
		return product;
	} catch (error) {
		console.error(error);
		return null;
	}
};

// 📌 Récupérer tous les produits
export const getAllProducts = async () => {
	try {
		const products = await db.product.findMany({
			include: { category: true }, // Si une catégorie n'existe pas, ce champ sera `null`
		});
		return products;
	} catch (error) {
		console.error("Erreur lors de la récupération des produits :", error);
		return [];
	}
};

// 📌 Mettre à jour un produit
export const updateProduct = async (id, data) => {
	try {
		const product = await db.product.update({
			where: { id },
			data: {
				...data, // Utilisation directe des valeurs passées
			},
		});
		revalidatePath("/products");
		return product;
	} catch (error) {
		console.error("Erreur lors de la mise à jour du produit :", error);
		return { error: "Erreur lors de la mise à jour du produit." };
	}
};

// 📌 Supprimer un produit
export const deleteProduct = async (id) => {
	try {
		await db.product.delete({
			where: { id },
		});
		revalidatePath("/products");
		return { success: true };
	} catch (error) {
		console.error(error);
		return { error: "Erreur lors de la suppression du produit." };
	}
};
