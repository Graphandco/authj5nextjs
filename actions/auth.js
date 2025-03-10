"use server";

import { signIn, signOut } from "../auth";
import { db } from "../db";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";

const getUserByEmail = async (email) => {
	try {
		const user = await db.user.findUnique({
			where: {
				email,
			},
		});
		return user;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const login = async (provider) => {
	await signIn(provider, { redirectTo: "/" });
	revalidatePath("/");
};

export const logout = async () => {
	await signOut({ redirectTo: "/" });
	revalidatePath("/");
};

export const loginWithCreds = async (formData) => {
	const rawFormData = {
		email: formData.get("email"),
		password: formData.get("password"),
		role: "ADMIN",
		redirectTo: "/",
	};

	const existingUser = await getUserByEmail(formData.get("email"));
	console.log(existingUser);

	try {
		await signIn("credentials", rawFormData);
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return { error: "Invalid credentials!" };
				default:
					return { error: "Something went wrong!" };
			}
		}

		throw error;
	}
	revalidatePath("/");
};
