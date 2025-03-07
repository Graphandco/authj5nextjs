"use client";
import { useEffect, useState } from "react";
import { list } from "@vercel/blob";

export default function ImagesList() {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchImages = async () => {
			try {
				// Vérification si le token est disponible
				const token =
					"vercel_blob_rw_seAUdj2EVZB0tMq3_GlB9xPMR6hLsh7QZdZWzVzlECv7zNx";
				if (!token) throw new Error("Token manquant dans .env.local");

				// Récupération des images depuis Vercel Blob
				const response = await list({ token });

				if (!response || !response.blobs)
					throw new Error("Aucune image trouvée");

				setImages(response.blobs);
			} catch (error) {
				console.error("Erreur:", error);
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchImages();
	}, []); // ✅ Dépendance vide → exécute `fetchImages()` une seule fois

	if (error) return <p className="text-red-500">Erreur : {error}</p>;
	if (loading) return <p>Chargement...</p>;

	return (
		<div>
			<h2>Liste des images</h2>
			{images.length === 0 ? (
				<p>Aucune image trouvée</p>
			) : (
				<ul>
					{images.map((blob) => (
						<li key={blob.pathname}>
							<a
								href={blob.downloadUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								{blob.pathname}
							</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
