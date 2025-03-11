"use client";
import { useProduct } from "../context/ProductContext";
import { Heart, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const ProductItem = ({ product, pageType, editMode }) => {
	const { removeProduct, toggleInCart, toggleToBuy } = useProduct();

	let catColor;
	switch (product.category?.name) {
		case "Divers":
			catColor = "border-red-500";
			break;
		case "Boissons":
			catColor = "border-blue-400";
			break;
		case "Fruits & Légumes":
			catColor = "border-green-500";
			break;
		case "Viande & Charcuterie":
			catColor = "border-red-500";
			break;
		default:
			catColor = "border-card";
	}

	return (
		<div
			className={`border-2 ${catColor} p-4 flex flex-col justify-center gap-1 text-center rounded-lg relative ${
				product.tobuy && pageType === "inventaire" && "opacity-50"
			}`}
			onClick={() =>
				pageType === "shoppingList"
					? toggleInCart(product.id, product.incart)
					: !product.tobuy && toggleToBuy(product.id, product.tobuy)
			}
		>
			{/* {product.image && (
				<Image
					src={`/images/items/${product.image}`}
					width={32}
					height={32}
					alt={product.title}
					className="mx-auto"
					quality={75}
				/>
			)} */}
			<div className="text-[.9rem]">{product.title}</div>
			{product.favorite && (
				<div className="absolute top-2 right-2">
					<Heart
						size={14}
						className="text-primary fill-[#dd2525] text-[#dd2525]"
					/>
				</div>
			)}
			{/* <h3 className="text-size-small">{product.category?.name}</h3> */}
			{/* <p className="text-gray-600">
				{product.tobuy ? "Liste" : "Inventaire"}
			</p>
			<p className="text-gray-600">
				{product.incart ? "Panier" : "Pas panier"}
			</p> */}
			{pageType === "inventaire" && editMode && (
				<div className="flex justify-center gap-3">
					<Button size="icon">
						<Link href={`/product/edit/${product.id}`}>
							<Pencil />
						</Link>
					</Button>
					<Button
						size="icon"
						onClick={() => removeProduct(product.id)}
					>
						<Trash2 />
					</Button>
				</div>
			)}
		</div>
	);
};

export default ProductItem;
