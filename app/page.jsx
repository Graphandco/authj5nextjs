import Login from "../components/Login";
import Register from "../components/Register";

export default function Home() {
	return (
		<main className="flex h-full items-center justify-center">
			<h1 className="text-3xl">Landing page</h1>
			<div className="text-2xl">Inscription</div>
			<Register />
			<div className="text-2xl">Connexion</div>
			<Login />
		</main>
	);
}
