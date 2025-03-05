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

	// Charger les produits et catégories au démarrage
	useEffect(() => {
		const fetchData = async () => {
			const productData = await getAllProducts();
			const categoryData = await getAllCategories();
			setProducts(productData);
			setCategories(categoryData);
		};
		fetchData();
	}, []);

	// Ajouter un produit
	const addProduct = async (formData) => {
		const newProduct = await createProduct(formData);
		if (!newProduct.error) {
			setProducts((prev) => [...prev, newProduct]);
		}
	};

	// Supprimer un produit
	const removeProduct = async (id) => {
		const result = await deleteProduct(id);
		if (result.success) {
			setProducts((prev) => prev.filter((product) => product.id !== id));
		}
	};

	// Changer l'état "tobuy"
	const toggleTobuy = async (id) => {
		const product = products.find((p) => p.id === id);
		if (!product) return;

		const updatedProduct = await updateProduct(id, {
			tobuy: !product.tobuy,
		});

		if (!updatedProduct.error) {
			setProducts((prev) =>
				prev.map((p) =>
					p.id === id ? { ...p, tobuy: updatedProduct.tobuy } : p
				)
			);
		}
	};

	return (
		<ProductContext.Provider
			value={{
				products,
				categories,
				addProduct,
				removeProduct,
				toggleTobuy,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

// Hook pour utiliser le contexte
export const useProduct = () => useContext(ProductContext);
