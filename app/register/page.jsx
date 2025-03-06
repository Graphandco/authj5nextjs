import React from "react";
import Link from "next/link";
import RegisterForm from "../../components/RegisterForm";

const RegisterPage = () => {
	return (
		<div>
			<h1>Créer un compte</h1>
			<RegisterForm />
			<div className="mt-3">
				<Link href="/login">S'identifier</Link>
			</div>
		</div>
	);
};

export default RegisterPage;
