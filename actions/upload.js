"use server";

import { put } from "@vercel/blob";

export const uploadFile = async (formData) => {
	const file = formData.get("file");
	const filename = file.name;
	const blob = await put(filename, file, {
		access: "public",
	});
	return blob.url;
};
