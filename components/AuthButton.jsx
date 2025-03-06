import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

const AuthButton = () => {
	const { pending } = useFormStatus();
	return (
		<Button
			disabled={pending}
			type="submit"
			className={`${pending ? "bg-gray-600" : "bg-primary"} w-full`}
		>
			{pending ? "Chargement..." : "Connexion"}
		</Button>
	);
};

export default AuthButton;
