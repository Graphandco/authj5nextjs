"use client";

import React, { useState } from "react";
import { loginWithCreds } from "../actions/auth/login";
import { signIn } from "next-auth/react"; // ✅ signIn doit être dans un composant client

const Login = () => {
	const [error, setError] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		// Vérifier les identifiants
		const response = await loginWithCreds(formData);

		if (response?.error) {
			setError(response.error);
			return;
		}

		// ✅ Appel client de signIn
		await signIn("credentials", {
			email: formData.get("email"),
			password: formData.get("password"),
			callbackUrl: "/", // Redirection après connexion
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
					<button
						type="submit"
						className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
					>
						Se connecter
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
