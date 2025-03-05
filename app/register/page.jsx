import React from "react";
import Link from "next/link";
import RegisterForm from "../../components/RegisterForm";

const RegisterPage = () => {
	return (
		<div>
			<span>RegisterPage</span>
			<RegisterForm />
			<Link href="/login">S'identifier</Link>
		</div>
	);
};

export default RegisterPage;
