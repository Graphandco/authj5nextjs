import React from "react";
import LoginForm from "../../components/LoginForm";
import Link from "next/link";

const LoginPage = () => {
	return (
		<div>
			<h1>Se connecter</h1>
			<LoginForm />
			<div className="mt-3">
				<Link className="mt-3" href="/register">
					Créer un compte
				</Link>
			</div>
		</div>
	);
};

export default LoginPage;
