"use client";
import { Button } from "@/components/ui/button";
import { uploadFile } from "../../actions/upload";
import { useState } from "react";
import ImagesList from "../../components/ImagesList";

const UploadPage = () => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const file = formData.get("file");
		const url = await uploadFile(formData);
		setImageUrl(url);
		console.log({ file });
	};
	const [imageUrl, setImageUrl] = useState(null);
	return (
		<>
			<h1>Uploader une image</h1>
			<form onSubmit={handleSubmit}>
				<input type="file" name="file" />
				<Button type="submit">Uploader</Button>
			</form>
			{imageUrl && <img src={imageUrl} alt="" />}
			<ImagesList />
		</>
	);
};

export default UploadPage;
