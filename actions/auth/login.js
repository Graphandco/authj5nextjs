"use server";

import { db } from "../../db";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

// Vérifier si l'utilisateur existe
const getUserByEmail = async (email) => {
	try {
		return await db.user.findUnique({ where: { email } });
	} catch (error) {
		console.log(error);
		return null;
	}
};

// Vérifier les identifiants (sans signIn)
export const loginWithCreds = async (formData) => {
	const email = formData.get("email");
	const password = formData.get("password");

	// Vérifier si l'utilisateur existe
	const existingUser = await getUserByEmail(email);
	if (!existingUser) {
		return { error: "Utilisateur introuvable !" };
	}

	// Vérifier le mot de passe
	const passwordMatch = await bcrypt.compare(
		password,
		existingUser.hashedPassword
	);
	if (!passwordMatch) {
		return { error: "Mot de passe incorrect !" };
	}

	// ✅ Retourner les informations utilisateur sans faire `signIn()`
	return { success: true };
};
