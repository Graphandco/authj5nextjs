"use client";

import React from "react";
import { useProduct } from "../context/ProductContext";

const ProductList = () => {
	const { products, removeProduct, toggleTobuy } = useProduct();

	return (
		<div className="w-full">
			<h2 className="text-2xl font-bold text-white mb-4">
				Liste des produits
			</h2>
			{products.length === 0 ? (
				<p className="text-gray-400">Aucun produit trouvé.</p>
			) : (
				<ul className="space-y-4">
					{products.map((product) => (
						<li
							key={product.id}
							className={`p-4 rounded-md flex justify-between items-center cursor-pointer ${
								product.tobuy ? "bg-green-600" : "bg-gray-800"
							}`}
							onClick={() => toggleTobuy(product.id)}
						>
							<div>
								<h3 className="text-lg font-semibold text-white">
									{product.title}
								</h3>
								<p className="text-sm text-gray-400">
									Catégorie:{" "}
									{product.category
										? product.category.name
										: "Non définie"}
								</p>
								<p>
									{product.incart ? "Panier" : "Pas panier"}
								</p>
								<p>
									{product.tobuy ? "Acheter" : "Pas acheté"}
								</p>
								<p>
									{product.favorite ? "Favori" : "Pas favori"}
								</p>
								<img
									src={product.image}
									alt={product.title}
									className="mt-2 w-20 h-20 object-cover rounded-md"
								/>
								<p className="text-sm mt-2 font-bold">
									{product.tobuy
										? "🛒 À acheter"
										: "❌ Non acheté"}
								</p>
							</div>

							{/* Bouton de suppression */}
							<button
								onClick={(e) => {
									e.stopPropagation(); // Empêcher la propagation du clic sur le produit
									removeProduct(product.id);
								}}
								className="ml-4 text-red-500 hover:text-red-700"
								title="Supprimer"
							>
								🗑️
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default ProductList;
