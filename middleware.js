// export { auth as middleware } from "@/auth";

import { NextResponse } from "next/server";
import { auth } from "./auth";

const protectedRoutes = ["/middleware"];

export default async function middleware(request) {
	const session = await auth();

	const isProtected = protectedRoutes.some((route) =>
		request.nextUrl.pathname.startsWith(route)
	);

	if (!session && isProtected) {
		return new NextResponse(JSON.stringify({ error: "Non autorisé" }), {
			status: 401,
			headers: { "Content-Type": "application/json" },
		});
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
