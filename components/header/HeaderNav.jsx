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
				<DropdownMenuItem>
					<Link href="/middleware">Middleware</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href="/server">Server</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				{session?.user && (
					<>
						<DropdownMenuLabel>
							{session.user.name}
						</DropdownMenuLabel>
						<DropdownMenuItem onClick={() => logout()}>
							Déconnexion
						</DropdownMenuItem>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default HeaderNav;
