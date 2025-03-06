import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Anton } from "next/font/google";
import { Lato } from "next/font/google";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ProductProvider } from "../context/ProductContext";
import { CategoryProvider } from "../context/CategoryContext";
import { auth } from "../auth";
import Header from "../components/header/Header";
import BottomMenu from "../components/BottomMenu";
import { Toaster } from "../components/ui/sonner";

const open_Sans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
});
const lato = Lato({
	variable: "--font-lato",
	subsets: ["latin"],
	weight: "400",
});
const anton = Anton({
	variable: "--font-anton",
	weight: "400",
	subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
	const session = await auth();
	return (
		<SessionProvider session={session}>
			<ProductProvider>
				<CategoryProvider>
					<html lang="en">
						<body className={`${anton.variable} antialiased`}>
							<Header />
							<main className="container py-5">{children}</main>
							<Toaster
								position="bottom-right"
								toastOptions={{
									className: "bg-card text-white",
								}}
							/>
							<BottomMenu session={session} />
						</body>
					</html>
				</CategoryProvider>
			</ProductProvider>
		</SessionProvider>
	);
}
