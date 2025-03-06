"use client";
import { useState } from "react";
import { useProduct } from "../context/ProductContext";
import ProductItem from "./ProductItem";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { getAllCategories } from "../actions/category";
import { Button } from "./ui/button";

const ProductList = ({ pageType }) => {
	const { products, removeProduct, toggleToBuy, toggleInCart, categories } =
		useProduct();
	const [editMode, setEditMode] = useState(false);

	const listingProducts =
		pageType === "shoppingList"
			? products.filter((product) => product.tobuy && !product.incart)
			: products;
	const incartProducts = products.filter(
		(product) => product.tobuy && product.incart
	);

	return (
		<div className="w-full">
			{pageType === "inventaire" && (
				<div className="flex items-center justify-end space-x-2">
					<Switch
						id="edit-mode"
						checked={!editMode}
						onCheckedChange={() => setEditMode((prev) => !prev)}
						className="-scale-x-100"
					/>
					<Label htmlFor="edit-mode">Éditer</Label>
				</div>
			)}

			{categories.map((cat) => (
				<div key={cat.id} className="">
					{/* On affiche le titre uniquement si la catégorie contient des éléments */}
					{listingProducts?.some(
						(product) => product.category?.id === cat.id
					) && (
						<div className="font-title text-size-h4 text-primary p-2 mt-8 mb-3">
							{cat.name}
						</div>
					)}

					{/* <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4"> */}
					<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
						{listingProducts
							?.filter(
								(product) => product.category?.id === cat.id
							)
							.map((product) => {
								return (
									<ProductItem
										key={product.id}
										product={product}
										pageType={pageType}
										toggleToBuy={toggleToBuy}
									/>
								);
							})}
					</div>
				</div>
			))}

			{pageType === "shoppingList" && (
				<section className="mt-12">
					<div className="font-title text-size-h5 text-white my-2">
						Déjà dans le panier
					</div>
					<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-5">
						{incartProducts.map((product) => {
							return (
								<ProductItem
									key={product.id}
									pageType={pageType}
									product={product}
								/>
							);
						})}
					</div>
					<Button
						onClick={() =>
							incartProducts.forEach((shop) =>
								toggleToBuy(shop.id, shop.tobuy)
							)
						}
					>
						Vider la liste
					</Button>
				</section>
			)}
		</div>
	);
};

export default ProductList;
