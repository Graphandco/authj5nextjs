"use client";
import Link from "next/link";
import { logout } from "../../actions/auth";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logs } from "lucide-react";

const HeaderNav = ({ session }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Logs />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Liste de courses</DropdownMenuLabel>
				<DropdownMenuItem asChild>
					<Link href="/inventaire">Inventaire</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href="/products/add">Ajouter un produit</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href="/categories">Catégories</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuLabel>Autres</DropdownMenuLabel>
				<DropdownMenuItem asChild>
					<Link href="/middleware">Middleware</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href="/server">Server</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				{session?.user ? (
					<>
						<DropdownMenuLabel>
							{session.user.name}
						</DropdownMenuLabel>
						<DropdownMenuItem onClick={() => logout()}>
							Déconnexion
						</DropdownMenuItem>
					</>
				) : (
					<>
						<DropdownMenuLabel>Compte</DropdownMenuLabel>
						<DropdownMenuItem asChild>
							<Link href="/login">Se connecter</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link href="/register">Créer un compte</Link>
						</DropdownMenuItem>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default HeaderNav;
