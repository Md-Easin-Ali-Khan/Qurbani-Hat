import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    console.log("Middleware running:", pathname);

    const sessionCookie = getSessionCookie(request);

    const isProtected =
        pathname.startsWith("/my-profile") ||
        /^\/animals\/[^/]+$/.test(pathname);

    if (isProtected && !sessionCookie) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/my-profile/:path*",
        "/animals/:path*",
    ],
};