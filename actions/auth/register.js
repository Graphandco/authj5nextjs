"use server";

import { db } from "../../db";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

// Vérifier si l'utilisateur existe déjà
const getUserByEmail = async (email) => {
	try {
		return await db.user.findUnique({ where: { email } });
	} catch (error) {
		console.log(error);
		return null;
	}
};

// Création d'un compte utilisateur (sans signIn)
export const registerUser = async (formData) => {
	const email = formData.get("email");
	const password = formData.get("password");
	const name = formData.get("name") || "";

	// Vérifier si l'email est déjà utilisé
	const existingUser = await getUserByEmail(email);
	if (existingUser) {
		return { error: "Cet email est déjà utilisé !" };
	}

	// Hacher le mot de passe
	const hashedPassword = await bcrypt.hash(password, 10);

	try {
		const newUser = await db.user.create({
			data: {
				email,
				hashedPassword,
				name,
				role: "USER",
			},
		});

		revalidatePath("/");
		return newUser;
	} catch (error) {
		console.error("Erreur lors de l'inscription :", error);
		return { error: "Une erreur est survenue lors de l'inscription." };
	}
};
