import React from "react";
import LoginForm from "../../components/LoginForm";
import Link from "next/link";

const LoginPage = () => {
	return (
		<div>
			<span>LoginPage</span>
			<LoginForm />
			<Link href="/register">Créer un compte</Link>
		</div>
	);
};

export default LoginPage;
