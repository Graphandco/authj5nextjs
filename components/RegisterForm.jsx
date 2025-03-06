"use client";

import React, { useState } from "react";
import { registerUser } from "../actions/auth/register";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

const RegisterForm = () => {
	const [error, setError] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		const response = await registerUser(formData);

		if (response?.error) {
			setError(response.error);
			return;
		}

		// ✅ Connexion après inscription
		await signIn("credentials", {
			email: formData.get("email"),
			password: formData.get("password"),
			callbackUrl: "/", // Redirection après inscription
		});
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col gap-4"
			>
				{error && <p className="text-red-500 text-sm">{error}</p>}
				<div>
					<label className="block text-sm font-medium text-gray-200">
						Nom
					</label>
					<input
						type="text"
						placeholder="Votre nom"
						name="name"
						className="mt-1 w-full px-4 p-2 h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-200">
						Email
					</label>
					<input
						type="email"
						placeholder="Email"
						name="email"
						className="mt-1 w-full px-4 p-2 h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
						required
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-200">
						Mot de passe
					</label>
					<input
						type="password"
						placeholder="Mot de passe"
						name="password"
						className="mt-1 w-full px-4 p-2 h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
						required
					/>
				</div>
				<div className="mt-4">
					<Button type="submit" className="w-full">
						S'inscrire
					</Button>
				</div>
			</form>
		</div>
	);
};

export default RegisterForm;
