"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
	getAllProducts,
	createProduct,
	deleteProduct,
	updateProduct,
} from "../actions/product";
import { getAllCategories } from "../actions/category";

// Création du contexte
const ProductContext = createContext();

// Provider pour les produits et catégories
export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	// 🔄 Fonction pour recharger les produits et catégories
	const refreshData = async () => {
		setLoading(true);
		const productData = await getAllProducts();
		const categoryData = await getAllCategories();
		setProducts(productData);
		setCategories(categoryData);
		setLoading(false);
	};

	// Charger les produits et catégories au démarrage
	useEffect(() => {
		refreshData();
	}, []);

	// Ajouter un produit et recharger les données
	const addProduct = async (formData) => {
		const newProduct = await createProduct(formData);
		if (!newProduct.error) {
			await refreshData();
		}
	};

	// Supprimer un produit et recharger les données
	const removeProduct = async (id) => {
		const result = await deleteProduct(id);
		if (result.success) {
			await refreshData();
		}
	};

	// Changer l'état "tobuy" et recharger les données
	const toggleToBuy = async (id) => {
		const product = products.find((p) => p.id === id);
		if (!product) return;

		await updateProduct(id, {
			tobuy: !product.tobuy,
			incart: false,
		});

		await refreshData();
	};

	// Changer l'état "inCart" et recharger les données
	const toggleInCart = async (id) => {
		const product = products.find((p) => p.id === id);
		if (!product) return;

		await updateProduct(id, {
			incart: !product.incart,
		});

		await refreshData();
	};

	return (
		<ProductContext.Provider
			value={{
				products,
				categories,
				addProduct,
				removeProduct,
				toggleToBuy,
				toggleInCart,
				loading,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

// Hook pour utiliser le contexte
export const useProduct = () => useContext(ProductContext);
