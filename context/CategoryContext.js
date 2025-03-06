"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
	getAllCategories,
	createCategory,
	deleteCategory,
	updateCategory,
} from "../actions/category";

// Création du contexte
const CategoryContext = createContext();

// Provider pour les catégories
export const CategoryProvider = ({ children }) => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	// 🔄 Fonction pour recharger les catégories en temps réel
	const refreshData = async () => {
		setLoading(true);
		const categoryData = await getAllCategories();
		setCategories(categoryData);
		setLoading(false);
	};

	// Charger les catégories au démarrage
	useEffect(() => {
		refreshData();
	}, []);

	// Ajouter une catégorie et recharger les données
	const addCategory = async (formData) => {
		const newCategory = await createCategory(formData);
		if (!newCategory.error) {
			await refreshData();
		}
	};

	// Supprimer une catégorie et recharger les données
	const removeCategory = async (id) => {
		const result = await deleteCategory(id);
		if (result.success) {
			await refreshData();
		}
	};

	// Mettre à jour une catégorie et recharger les données
	const editCategory = async (id, formData) => {
		const updatedCategory = await updateCategory(id, formData);
		if (!updatedCategory.error) {
			await refreshData();
		}
	};

	return (
		<CategoryContext.Provider
			value={{
				categories,
				addCategory,
				removeCategory,
				editCategory,
				loading,
			}}
		>
			{children}
		</CategoryContext.Provider>
	);
};

// Hook pour utiliser le contexte
export const useCategory = () => useContext(CategoryContext);
