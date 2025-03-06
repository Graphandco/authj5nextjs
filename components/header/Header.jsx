import { auth } from "../../auth";
import Link from "next/link";
import HeaderNav from "./HeaderNav";

const Header = async () => {
	const session = await auth();
	return (
		<header className="sticky z-10 top-0 bg-primary text-background">
			<nav className="container flex w-full items-center justify-between py-4">
				<Link className="font-bold" href="/">
					Graph and Co
				</Link>
				<HeaderNav session={session} />
			</nav>
		</header>
	);
};

export default Header;
